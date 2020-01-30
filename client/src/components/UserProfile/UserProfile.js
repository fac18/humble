import React from "react";
import getRequest from "../../utils/getRequest";

const UserProfile = ({ user }) => {
  // useEffect(() => {
  //   getRequest(`/get-member?user=${memberId}`).then(res => {
  //     setMemberName(res.member_name);
  //     setMemberAvatar(res.avatar_url);
  //     setMemberEmail(res.email);
  //     setMemberPostcode(res.postcode);
  //   });
  // }, []);

  return <p>hello I'm a {user} user profile</p>;
};

export default UserProfile;
