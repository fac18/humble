import React from "react";
import "./Profile.css";
import Navbar from "../Navbar/Navbar";
import Button from "../styled/Button";
import P from "../styled/P";
import Container from "../styled/Container";
import H1 from "../styled/H1";
import H2 from "../styled/H2";
import H3 from "../styled/H3";

function Profile({
  memberName,
  memberAvatar,
  memberEmail,
  memberPostcode,
  memberOffers,
  memberRequests
}) {
  return (
    <React.Fragment>
      <H1>My Profile</H1>
      {memberAvatar ? (
        <img src={memberAvatar} alt={`${memberName}'s avatar`} />
      ) : null}
      {memberName ? <P>Name: {memberName}.</P> : null}
      {memberEmail ? <P>Contact email: {memberEmail}.</P> : null}
      {memberPostcode ? <P>Location: {memberPostcode}</P> : null}
      <H3>My offers:</H3>
      {memberOffers ? (
        <ul>
          {memberOffers.map(offer => (
            <li key={offer.offer_name}>
              {offer.offer_name}: {offer.offer_description}
            </li>
          ))}
        </ul>
      ) : (
        <P>You don't have any offers yet!</P>
      )}
      <H3>My requests:</H3>
      {memberRequests ? (
        <ul>
          {memberRequests.map(request => (
            <li key={request.request_name}>
              {request.request_name}: {request.request_description}
            </li>
          ))}
        </ul>
      ) : (
        <P>You don't have any requests yet!</P>
      )}
      <Navbar />
    </React.Fragment>
  );
}

export default Profile;
