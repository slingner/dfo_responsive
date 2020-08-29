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
            <h1 className='headerText checkEngine'>CHECK ENGINE LIGHT ON?</h1>

            <ion-icon
              className='iconArrow'
              style={{
                marginTop: '3%',
                color: '#ff6200',
              }}
              name='caret-forward-outline'
            ></ion-icon>
            <p
              className='text-nowrap smallText'
              style={{ display: 'inline-block', color: 'white' }}
            >
              Results matter! We Win, when it matters most
            </p>

            <br />
            <>
              <ion-icon
                style={{ color: '#ff6200' }}
                className='iconArrow'
                name='caret-forward-outline'
              ></ion-icon>
              <p
                className='text-nowrap smallText'
                style={{ display: 'inline-block', color: 'white' }}
              >
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
