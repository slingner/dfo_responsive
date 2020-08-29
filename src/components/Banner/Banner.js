import React from 'react';
import Image from './bg-hero.jpg';
import InjuryForm from '../InjuryForm/InjuryForm';
import './Banner.css';

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        height: 'auto',
        padding: '20px',
      }}
      className='jumbotron jumbotron-fluid'
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: '20px',
        }}
      >
        <div className='injuryFormResponsive'>
          <div className='nomobile'>
            <h1
              style={{
                color: 'white',
                marginLeft: '15%',
                width: '100%',
                fontSize: '35px',
              }}
              className='headerText'
            >
              CHECK ENGINE LIGHT ON?
            </h1>

            <ion-icon
              style={{
                color: '#ff6200',
                marginLeft: '10%',
                display: 'inline-block',
                marginTop: '3%',
              }}
              name='caret-forward-outline'
            ></ion-icon>
            <p style={{ display: 'inline-block', color: 'white' }}>
              Results matter! We Win, when it matters most
            </p>

            <br />
            <>
              <ion-icon
                style={{
                  color: '#ff6200',
                  marginLeft: '10%',
                  display: 'inline-block',
                }}
                name='caret-forward-outline'
              ></ion-icon>
              <p style={{ display: 'inline-block', color: 'white' }}>
                We will get you a Rental Car and Medical Care right away
              </p>
            </>
          </div>
        </div>
        <div>
          <InjuryForm />
        </div>
      </div>
    </div>
  );
}
