import React from 'react';
import Card from 'react-bootstrap/Card';

const DisplayCard=(props) => {
  return (
  <>
  <Card className='card'>
    <Card.Body>
      <Card.Title><h3>{props.fname} {props.lname}</h3></Card.Title>
      <Card.Text>{props.phoneNo}</Card.Text>
      <Card.Text>{props.email}</Card.Text>
      <Card.Text>{props.address}</Card.Text>
      <Card.Text>{props.program}</Card.Text>
    </Card.Body>
  </Card>
  </>
  );
}

export default DisplayCard;