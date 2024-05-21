import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../component/FormContainer';

import 'bootstrap/dist/css/bootstrap.css';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SubmitHandler = () => {
        // Add your login logic here
    };



    return (
        <FormContainer>
            <h1>Sign In</h1>

            <Form onSubmit={SubmitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Button style={{ marginTop: '20px' }} type='submit' variant='primary'>
                    Sign In
                </Button>

            </Form>


        </FormContainer>
    );
};

export default LoginScreen;