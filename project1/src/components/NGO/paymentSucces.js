import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function PaymentSucces() {
  return (
   <>
   <div>
    <Card style={{ width: '50rem' }} className='m-auto mt-5'>
      <Card.Header style={{backgroundColor:'#21d904'}}>Payment Status</Card.Header>
      <Card.Body>
        <Card.Title>Your payment is Successfull</Card.Title>
        <Card.Text>
         Thank you for paying.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
   </>
  )
}
