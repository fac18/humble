import React from "react";
import getRequest from "../../utils/getRequest";

const UserProfile = () => {
  // useEffect(() => {
  //   getRequest(`/get-member?member_id=${memberId}`).then(res => {
  //     setMemberName(res.member_name);
  //     setMemberAvatar(res.avatar_url);
  //     setMemberEmail(res.email);
  //     setMemberPostcode(res.postcode);
  //   });
  // }, []);

  return <p>hello I'm a user profile</p>;
};

export default UserProfile;
