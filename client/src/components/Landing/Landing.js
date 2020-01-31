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
import TextLink from "../styled/TextLink";

const Landing = () => (
  <>
    <Container>
      <Logo />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Link to="/about">
          <Button type="submit">Login</Button>
        </Link>
      </Form>
    </Container>
    <Container>
      <Button type="button">Sign up</Button>
      <TextLink to="/about">What is humble?</TextLink>
    </Container>
  </>
);

export default Landing;
