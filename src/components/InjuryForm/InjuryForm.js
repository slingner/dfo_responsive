import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function InjuryForm() {
  return (
    <Form
      style={{
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        padding: '35px',
        width: 'auto',
      }}
    >
      <Form.Label
        style={{ fontFamily: `'Open Sans', sans-serif'`, fontWeight: '800' }}
      >
        TELL US ABOUT YOUR INJURY
      </Form.Label>
      <Form.Group controlId='formBasicEmail'>
        <Form.Control
          style={{ borderRadius: '0px' }}
          type='Full name'
          placeholder='Full name'
        />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Control
          style={{ borderRadius: '0px' }}
          type='Tell us about your case'
          placeholder='Tell us about your case'
        />
        <Button
          variant='primary'
          type='submit'
          style={{
            backgroundColor: 'orange',
            borderRadius: '0px',
            border: 'none',
            width: '100%',
            marginTop: '1rem',
          }}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
