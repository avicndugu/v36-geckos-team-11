import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RestaurantCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/103/320/180" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>Location: {props.address}</p>
          <p>Hours: {props.hours}</p>
        </Card.Text>
        <Button variant="primary">View Restaurant</Button>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
