import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Forms = () => {
  const newLocal = (
    <Form.Group className='mb-3' controlId='formBasicPassword'>
      <Form.Label>Password</Form.Label>
      <Form.Control type='password' placeholder='Password' />
    </Form.Group>
  );
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type='email' placeholder='Enter Your Mobile Number' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Message to us </Form.Label>
        <Form.Control
          as='textarea'
          placeholder='Please enter your message here'
          rows={3}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default Forms;
