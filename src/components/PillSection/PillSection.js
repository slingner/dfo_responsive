import React from 'react';
import Badge from 'react-bootstrap/Badge';
import product from './product.png';

import './PillSection.css';

export default function PillSection() {
  return (
    <div className='pageWrapper'>
      <div
        style={{
          backgroundColor: '#0e85c9',
          height: '50px',
          width: '100%',
          color: 'white',
          textAlign: 'center',
          alignContent: 'center',
          fontSize: '30px',
          marginTop: '15px',
          marginBottom: '25px',
        }}
      >
        Instantly Find the Problem With Your Car!
      </div>
      <div className='pillResponsive'>
        <img src={product} alt='product img' className='productImage' />
        <div style={{ wrap: 'wrap', fontWeight: 'bold' }}>
          <Badge
            pill
            variant='light'
            style={{
              padding: '10px',
              margin: '5px',
            }}
          >
            <ion-icon
              style={{ color: '#0e85c9' }}
              name='checkmark-outline'
            ></ion-icon>
            Real Time Updates on Car Performance
          </Badge>
          <Badge
            pill
            variant='light'
            style={{
              padding: '10px',
              margin: '5px',
            }}
          >
            <ion-icon
              style={{ color: '#0e85c9' }}
              name='checkmark-outline'
            ></ion-icon>
            Free, Easy to Use App
          </Badge>
          <br />
          <Badge
            pill
            variant='light'
            style={{
              padding: '10px',
              margin: '5px',
            }}
          >
            <ion-icon
              style={{ color: '#0e85c9' }}
              name='checkmark-outline'
            ></ion-icon>
            Compatible with iOS and Android
          </Badge>
          <Badge
            pill
            variant='light'
            style={{
              padding: '10px',
              margin: '5px',
            }}
          >
            <ion-icon
              style={{ color: '#0e85c9' }}
              name='checkmark-outline'
            ></ion-icon>
            Easily Diagnose Your Car!
          </Badge>
          <p
            style={{
              fontSize: '10px',
              color: 'grey',
              marginTop: '40px',
              fontWeight: '400',
            }}
          >
            Compatible with cars manufactured after 1996. (Some exceptions
            apply)
            <br />
            Weight: 0.075KG | Dimensions: 70mm x 90mm x 30mm
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
