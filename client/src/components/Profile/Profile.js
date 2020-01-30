import React from "react";
import "./Profile.css";

import Navbar from "../Navbar/Navbar";

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
      {memberName ? <p>{memberName}'s Profile</p> : null}
      {memberAvatar ? <img src={memberAvatar} /> : null}
      {memberEmail ? <p>Contact email: {memberEmail}.</p> : null}
      {memberPostcode ? <p>Location: {memberPostcode}</p> : null}
      <p>My offers:</p>
      {memberOffers ? (
        <ul>
          {memberOffers.map(offer => (
            <li key={offer.offer_name}>
              {offer.offer_name}: {offer.offer_description}
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any offers yet!</p>
      )}
      <p>My requests:</p>
      {memberRequests ? (
        <ul>
          {memberRequests.map(request => (
            <li key={request.request_name}>
              {request.request_name}: {request.request_description}
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any requests yet!</p>
      )}
      <Navbar />
    </React.Fragment>
  );
}

export default Profile;
