import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

// import styled-components
import Button from "../styled/Button";
import P from "../styled/P";
import Logo from "../styled/Logo";
import Container from "../styled/Container";
import Input from "../styled/Input";
import Form from "../styled/Form";
import Navbar from "../Navbar/Navbar";

const Landing = () => (
  <>
    <Container>
      <Logo />
      <Link to="/about">What is humble?</Link>
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button type="submit">Login</Button>
      </Form>
      <Button type="button">Sign up</Button>
    </Container>
    <Navbar />
  </>
);

export default Landing;
