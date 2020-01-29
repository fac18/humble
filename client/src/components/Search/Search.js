import React, { useState, useEffect } from "react";
import "./Search.css";

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
    <div>
      <p>{membersInfo[0].memberName}</p>
      <img src={membersInfo[0].memberAvatar}></img>
      <p>{membersInfo[0].memberPostcode}</p>
      <p>{membersInfo[0].memberOffers}</p>
    </div>
  );
}

export default Search;
