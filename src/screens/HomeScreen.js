import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../component/FormContainer';


const HomeScreen = () => {
    const [businessName, setBusinessName] = useState('');
    const [description, setDescription] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("Submit");

    };





    return (
        <FormContainer>

            <Form onSubmit={SubmitHandler}>

                <Form.Group controlId='businessName'>
                    <Form.Label>Business Name:</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter your Business Name'
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                    >
                    </Form.Control>

                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </Form.Control>

                </Form.Group>

                <Button type='submit' style={{ marginTop: '20px' }} variant='primary'>
                    Continue
                </Button>

            </Form>
        </FormContainer>


    );
};

export default HomeScreen;