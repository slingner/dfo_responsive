import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export default function CardSet() {
  return (
    <CardDeck
      style={{
        textAlign: 'center',
        marginBottom: '3%',
        marginLeft: '3%',
        marginRight: '3%',
      }}
    >
      <Card
        style={{ borderRadius: '0px', margin: '20px', borderColor: 'orange' }}
      >
        <Card.Body>
          <Card.Title style={{ color: '#ff6200' }}>CAR SAVINGS</Card.Title>
          <Card.Text style={{ fontSize: '45px' }}>$4.75 Million</Card.Text>
          <div
            style={{ borderBottom: '1px solid #555', paddingBottom: '4px' }}
          />
          <div
            style={{ borderBottom: '1px solid #555', paddingBottom: '4px' }}
          />
        </Card.Body>
      </Card>
      <Card
        style={{ borderRadius: '0px', margin: '20px', borderColor: 'orange' }}
      >
        <Card.Body>
          <Card.Title style={{ color: '#ff6200' }}>
            MAINTENANCE SAVINGS
          </Card.Title>
          <Card.Text style={{ fontSize: '45px' }}>$2.75 Million</Card.Text>
          <div
            style={{ borderBottom: '1px solid #555', paddingBottom: '4px' }}
          />
          <div
            style={{ borderBottom: '1px solid #555', paddingBottom: '4px' }}
          />
        </Card.Body>
      </Card>
      <Card
        style={{ borderRadius: '0px', margin: '20px', borderColor: 'orange' }}
      >
        <Card.Body>
          <Card.Title style={{ color: '#ff6200' }}>HAPPY CUSTOMERS</Card.Title>
          <Card.Text style={{ fontSize: '45px' }}>$5.5 Million</Card.Text>
          <div
            style={{ borderBottom: '1px solid #555', paddingBottom: '4px' }}
          />
          <div
            style={{ borderBottom: '1px solid #555', paddingBottom: '4px' }}
          />
        </Card.Body>
      </Card>
    </CardDeck>
  );
}
