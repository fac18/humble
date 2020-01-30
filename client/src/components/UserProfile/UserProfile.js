import React, { useState, useEffect } from "react";
import getRequest from "../../utils/getRequest";
import Navbar from "../Navbar/Navbar";
import Button from "../styled/Button";
import P from "../styled/P";
import Container from "../styled/Container";
import H1 from "../styled/H1";
import H2 from "../styled/H2";
import H3 from "../styled/H3";

const UserProfile = ({ user, userView, setUserView }) => {
  const [userName, setUserName] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPostcode, setUserPostcode] = useState(null);
  const [userOffers, setUserOffers] = useState([]);
  const [userRequests, setUserRequests] = useState(null);

  useEffect(() => {
    console.log("getting profile");
    getRequest(`/get-profile?member_id=${user}`).then(res => {
      setUserName(res[0].member_name);
      setUserAvatar(res[0].avatar_url);
      setUserEmail(res[0].email);
      setUserPostcode(res[0].postcode);
      setUserOffers(res[1]);
      setUserRequests(res[2]);
    });
  }, []);

  return (
    <>
      <H2>User Profile</H2>
      {/* <Button onClick={() => setUserView(null)}>Back to Search</Button> */}
      <H3>userName is: {userName}</H3>
      <P>Test p component</P>

      <Navbar />
    </>
  );
};

export default UserProfile;
