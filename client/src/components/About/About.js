import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import Button from "../styled/Button";
import H1 from "../styled/H1";
import P from "../styled/P";
import Container from "../styled/Container";

const About = () => {
  return (
    <>
      <Container>
        <H1>About</H1>
        <P>
          Welcome to humble. Our goal is to promote community solidarity. We
          hope to help communities become kinder, more supportive and joyful.
          This platform has been built to facilitate real-life human
          interactions that are non-transactional in nature.
        </P>
        <P>
          We aim to help communities share their life skills, experience and
          knowledge amongst themselves free of charge, without the exchange of
          money, on a non-commercial basis.
        </P>
        <P>
          If you would like to join our platform, please read and confirm your
          agreement with our statement of intent.
        </P>
        <Link to="/search">
          <Button>go to search</Button>
        </Link>
      </Container>
      <Navbar />
    </>
  );
};

export default About;
