import React, { useState } from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap';
import { Link ,useLocation} from 'react-router-dom';
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
            <h2>Sign In</h2>

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
            <Row className='py-3'>
                <Col>
                New Customer? <Link to='/register'>
                        Register
                    </Link>
                </Col>
            </Row>

        </FormContainer>
    );
};

export default LoginScreen;