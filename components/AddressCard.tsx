import { FunctionComponent } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
//import styles from 'styles/Footer.module.scss';

const AddressCard: FunctionComponent = () => (
    <Card>
      <Card.Content>
        <Card.Header>Delivery order</Card.Header>
        <Card.Description>
            <strong>From: </strong> 11 Constitution Street Lansdowne, PA 19050<br/><hr />
            <strong>To: </strong> 156 Valley View Ave. Hackettstown, NJ 07840<br/><hr />
            <strong>Aditional Notes: </strong> <br/>
            Please carry carefully. It is a glass object.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
);

export default AddressCard;
