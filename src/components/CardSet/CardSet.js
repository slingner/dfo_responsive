import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './CardSet.css';

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
          <Card.Title
            className='titles text-nowrap'
            style={{ color: '#ff6200' }}
          >
            CAR SAVINGS
          </Card.Title>
          <Card.Text className='moneyText'>$4.75 Million</Card.Text>
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
          <Card.Title
            className='titles text-nowrap'
            style={{ color: '#ff6200' }}
          >
            MAINTENANCE SAVINGS
          </Card.Title>
          <Card.Text className='moneyText'>$2.75 Million</Card.Text>
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
          <Card.Title
            className='titles text-nowrap'
            style={{ color: '#ff6200' }}
          >
            HAPPY CUSTOMERS
          </Card.Title>
          <Card.Text className='moneyText'>$5.5 Million</Card.Text>
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
