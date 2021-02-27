import { FunctionComponent, useState } from 'react';
import { Button, Card, Header, Portal, Segment } from 'semantic-ui-react';

interface AddressCardProps {
    fromAddress: string;
    toAddress: string;
    notes: string;
}

interface AddressCardPopupProps {
    open: boolean;
    onClose: () => void;
    onAgree: () => void;
    onDisagree: () => void;
}

const AddressCardPopup: FunctionComponent<AddressCardPopupProps> = ({
    open,
    onClose,
    onAgree,
    onDisagree,
}) => (
    <Portal onClose={onClose} open={open}>
        <Segment
            style={{
                position: 'fixed',
                top: '40%',
                maxWidth: '300px',
                left: 0,
                right: 0,
                margin: '0 auto',
                zIndex: 1000,
            }}
        >
            <Header>Are you sure you want to take this order?</Header>
            <Button content='Yes' positive onClick={onAgree} />
            <Button content='No' negative onClick={onDisagree} />
        </Segment>
    </Portal>
);

const AddressCard: FunctionComponent<AddressCardProps> = ({
    fromAddress,
    toAddress,
    notes,
}) => {
    const [popupOpen, setPopupOpen] = useState(false);

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    const takeOrder = () => console.log('Order taken');

    return (
        <>
            <Card
                style={{
                    background: '#e5c7ff',
                }}
            >
                <Card.Content>
                    <Card.Header>Delivery order</Card.Header>
                    <Card.Description>
                        <strong>From: </strong> {fromAddress} <br />
                        <hr />
                        <strong>To: </strong> {toAddress} <br />
                        <hr />
                        <strong>Aditional Notes: </strong> <br />
                        {notes}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group fluid>
                        <Button
                            style={{
                                background: '#5fcf74',
                            }}
                            onClick={openPopup}
                            disabled={popupOpen}
                            positive
                        >
                            Approve
                        </Button>
                        <Button.Or />
                        <Button
                            style={{
                                background: '#d95959',
                            }}
                            color='red'
                        >
                            Decline
                        </Button>
                    </Button.Group>
                </Card.Content>
            </Card>
            <AddressCardPopup
                open={popupOpen}
                onClose={closePopup}
                onAgree={() => {
                    closePopup();
                    takeOrder();
                }}
                onDisagree={closePopup}
            />
        </>
    );
};

export default AddressCard;
