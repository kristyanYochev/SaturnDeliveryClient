import { FunctionComponent, useState } from 'react';
import { Button, Card } from 'semantic-ui-react';
import { Header, Segment, Portal } from 'semantic-ui-react'

interface AddressCardProps {
  fromAddress: String,
  toAddress: String,
  notes: String
}

const AddressCard: FunctionComponent<AddressCardProps> = ({ fromAddress, toAddress, notes }) => {
  const [open, setOpen] = useState(false);

  const closePopup = () => setOpen(false);
  const openPopup = () => setOpen(true);
  
  return (
    <>
    <Card style={{
          background: '#e5c7ff',
        }}>
        <Card.Content>
            <Card.Header>Delivery order</Card.Header>
            <Card.Description>
                <strong>From: </strong> { fromAddress } <br/><hr />
                <strong>To: </strong> { toAddress } <br/><hr />
                <strong>Aditional Notes: </strong> <br/>
                { notes }
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group fluid>
                <Button style={{
                    background: '#5fcf74',
                  }}
                  onClick={openPopup} 
                  disabled={open}
                  positive
                >
                    Approve
                </Button>
                <Button.Or />
                <Button style={{
                    background: '#d95959',
                  }} color='red'>
                    Decline
                </Button>
            </Button.Group>
        </Card.Content>
    </Card>
    <Portal onClose={closePopup} open={open}>
        <Segment
          style={{
            position: 'fixed',
            top: '40%',
            maxWidth: '300px',
            left:0,
            right:0,
            margin: '0 auto',
            zIndex: 1000,
          }}
        >
            <Header>Are you sure you want to take this order?</Header>
            <Button
              content='Yes'
              positive
              onClick={closePopup}
            />
            <Button
              content='No'
              negative
              onClick={closePopup}
            />
        </Segment>
    </Portal></>
  )
};

export default AddressCard;
