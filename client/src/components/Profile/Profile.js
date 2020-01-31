import React from "react";
import Navbar from "../Navbar/Navbar";
import Button from "../styled/Button";
import P from "../styled/P";
import Container from "../styled/Container";
import H1 from "../styled/H1";
import H2 from "../styled/H2";
import H3 from "../styled/H3";

const Profile = ({ member }) => {
  return (
    <>
      <H1>My Profile</H1>
      {member.avatar ? (
        <img src={member.avatar} alt={`${member.name}'s avatar`} />
      ) : null}
      {member.name ? <P>name: {member.name}.</P> : null}
      {member.email ? <P>Contact email: {member.email}.</P> : null}
      {member.postcode ? <P>Location: {member.postcode}</P> : null}
      <H3>My offers:</H3>
      {member.offers ? (
        <ul>
          {member.offers.map(offer => (
            <li key={offer.offer_name}>
              {offer.offer_name}: {offer.offer_description}
            </li>
          ))}
        </ul>
      ) : (
        <P>You don't have any offers yet!</P>
      )}
      <H3>My requests:</H3>
      {member.requests ? (
        <ul>
          {member.requests.map(request => (
            <li key={request.request_name}>
              {request.request_name}: {request.request_description}
            </li>
          ))}
        </ul>
      ) : (
        <P>You don't have any requests yet!</P>
      )}
      <Navbar />
    </>
  );
};

export default Profile;
