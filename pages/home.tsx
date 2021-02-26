import { useCollection } from '@nandorojo/swr-firestore';
import AddressCard from 'components/AddressCard';
import { FunctionComponent } from 'react';
import { List } from 'semantic-ui-react';
import { Order } from 'utils/interfaces';

const HomePage: FunctionComponent = () => {
    const { data: orders } = useCollection<Order>('orders', {
        listen: true,
        where: ['state', '==', 'new'],
    });

    return (
        <List>
            {orders?.map((order, id) => (
                <AddressCard {...order} key={id}></AddressCard>
            )) || <h1>No orders</h1>}
        </List>
    );
};

export default HomePage;
