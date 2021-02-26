import { useState, FormEvent, FunctionComponent } from 'react';
import { Button, Header, Form, Message } from 'semantic-ui-react';
import { useUser } from 'utils/useUser';
import { fuego } from '@nandorojo/swr-firestore';
import styles from 'styles/Index.module.scss';
import LoadingPage from 'components/LoadingPage';

const ReisterPage: FunctionComponent = () => {
    const { status } = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const register = async (e: FormEvent) => {
        e.preventDefault();
        try {
            if (password != repeatPassword) {
                throw {
                    message: 'Passwords do not match!',
                };
            }
            const { user } = await fuego
                .auth()
                .createUserWithEmailAndPassword(email, password);

            await fuego.db.collection('users').doc(user.uid).set({
                role: 'delivery-guy',
            });
        } catch (error) {
            setError(error.message);
            setTimeout(() => setError(''), 6000);
        }
    };

    if (status === 'wait') {
        return <LoadingPage />;
    }

    return (
        <div className={styles['container']}>
            <Header className={styles['header']} as='h1'>
                Saturn
            </Header>
            <Form className={styles['form']} onSubmit={register}>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Email'
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Repeat Password'
                    placeholder='Repeat Password'
                    type='password'
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <Button
                    fluid
                    className={`${styles['submit']} ${styles['primary']}`}
                    type='submit'
                >
                    REGISTER
                </Button>
                <Message negative hidden={Boolean(!error)}>
                    {error}
                </Message>
            </Form>
        </div>
    );
};

export default ReisterPage;
