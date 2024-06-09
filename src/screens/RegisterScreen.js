import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

import Message from '../component/Message';
import FormContainer from '../component/FormContainer';
import Loader from '../component/Loader';



const RegisterScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
  
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const redirect = location.search ? location.search.split('=')[1] : '/';


  

   

    const SubmitHandler = (e) => {
        e.preventDefault();
        //Dispatch Register
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {

            console.log('Registering');
            //write the logic to register the user
        };

    };

    return (
        <FormContainer>
            <h2>Register</h2>
           
            <Form onSubmit={SubmitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
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
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Button style={{ marginTop: '20px' }} type='submit' variant='primary'>
                    Register
                </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Have an account? <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
                        Sign In
                    </Link>
                </Col>
            </Row>
        </FormContainer >

    );

};
export default RegisterScreen;