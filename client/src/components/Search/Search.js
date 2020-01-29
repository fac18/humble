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
  });

  if (!membersInfo) return <h1>Loading...</h1>;

  return (
    <React.Fragment>
      <UserCard>
        <img
          style={{ height: "15vh", width: "auto" }}
          src={membersInfo[0].memberAvatar}
        />
        <div style={{ flexFlow: "column" }}>
          <p>{membersInfo[0].memberName}</p>
          <p>{membersInfo[0].memberPostcode}</p>
          <p>{membersInfo[0].memberOffers}</p>
        </div>
      </UserCard>

      <UserCard>
        <img
          style={{ height: "15vh", width: "auto" }}
          src={membersInfo[1].memberAvatar}
        />
        <div style={{ flexFlow: "column" }}>
          <p>{membersInfo[1].memberName}</p>
          <p>{membersInfo[1].memberPostcode}</p>
          <p>{membersInfo[1].memberOffers}</p>
        </div>
      </UserCard>
    </React.Fragment>
  );
}

export default Search;
