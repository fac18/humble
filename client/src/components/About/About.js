import React from "react";
import "./About.css";

import Navbar from "../Navbar/Navbar";

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
          have built a platform to help facilitate real-life human interactions
          that are non-transactional in nature.
        </P>
        <P>
          We want to help communities share their life skills, experience and
          knowledge amongst themselves for free, without the exchange of money,
          on a non-commercial basis.
        </P>
        <P>
          If you would like to join our platform, please read and confirm your
          agreement with our statement of intent.
        </P>
      </Container>
      <Navbar />
    </>
  );
};

export default About;
