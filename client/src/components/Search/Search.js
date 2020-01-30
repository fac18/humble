import React, { useState, useEffect } from "react";
import "./Search.css";
import UserCard from "../styled/UserCard";
import Container from "../styled/Container";

function Search() {
  const [membersInfo, setMembersInfo] = useState(null);

  useEffect(() => {
    setMembersInfo([
      {
        memberName: "Reggie",
        memberPostcode: "N154UY",
        memberAvatar:
          "https://content.invisioncic.com/Mwarframe/pages_media/1_MrBearGaming.png",
        memberOffers: "hotpot"
      },
      {
        memberName: "Kin",
        memberPostcode: "N159BT",
        memberAvatar:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png",
        memberOffers: "painting"
      }
    ]);
  }, []);

  if (!membersInfo) return <h1>Loading...</h1>;

  return (
    <React.Fragment>
      {membersInfo.map(member => {
        return (
          <UserCard>
            <img src={member.memberAvatar} />
            <div>
              <p>{member.memberName}</p>
              <p>{member.memberPostcode}</p>
              <p>{member.memberOffers}</p>
            </div>
          </UserCard>
        );
      })}
    </React.Fragment>
  );
}

export default Search;
