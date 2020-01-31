import React, { useState, useEffect } from "react";
import getRequest from "../../utils/getRequest";
import Navbar from "../Navbar/Navbar";
import Button from "../styled/Button";
import H2 from "../styled/H2";
import H3 from "../styled/H3";

const UserProfile = ({ user, setViewUser }) => {
  const [userSearch, setUserSearch] = useState(null);

  useEffect(() => {
    getRequest(`/get-profile?member_id=${user}`).then(res => {
      setUserSearch({
        name: res[0].member_name,
        avatar: res[0].avatar_url,
        email: res[0].email,
        postcode: res[0].postcode,
        offers: res[1],
        requests: res[2]
      });
    });
  }, []);

  if (!userSearch) return <H2>Loading...</H2>;
  return (
    <>
      <H2>User Profile</H2>
      <Button onClick={() => setViewUser(null)}>Back to Search</Button>
      {userSearch.name ? <H3>Viewing {userSearch.name}'s Profile</H3> : null}

      {userSearch.avatar ? <img src={userSearch.avatar} /> : null}
      {userSearch.email ? <p>Contact email: {userSearch.email}.</p> : null}
      {userSearch.postcode ? <p>Location: {userSearch.postcode}</p> : null}
      <p>Offers:</p>
      {userSearch.offers ? (
        <ul>
          {userSearch.offers.map(offer => (
            <li key={offer.offer_name}>
              {offer.offer_name}: {offer.offer_description}
            </li>
          ))}
        </ul>
      ) : (
        <p>{userSearch.name} does not currently have any offers</p>
      )}
      <p>Requests:</p>
      {userSearch.requests ? (
        <ul>
          {userSearch.requests.map(request => (
            <li key={request.request_name}>
              {request.request_name}: {request.request_description}
            </li>
          ))}
        </ul>
      ) : (
        <p>{userSearch.name} does not currently have any requests</p>
      )}

      <Navbar />
    </>
  );
};

export default UserProfile;
