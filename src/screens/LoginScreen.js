import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../component/FormContainer";

import "bootstrap/dist/css/bootstrap.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = () => {
    // Add your login logic here
  };

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  useEffect(() => {
    if (user) {
      console.log(user.access_token);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          console.log(profile.picture);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <FormContainer>
      <h2>Sign In</h2>

      <Form onSubmit={SubmitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button style={{ marginTop: "20px" }} type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer? <Link to="/register">Register</Link>
        </Col>
      </Row>

      <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        {profile ? (
          <div>
            <img
              src={profile.picture}
              alt="Profile Pic"
              referrerPolicy="no-referrer"
            />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <p>JWT Token: {user.access_token}</p>
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )}
      </div>
    </FormContainer>
  );
};

export default LoginScreen;
