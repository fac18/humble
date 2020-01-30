import React, { useState, useEffect } from "react";
import "./Search.css";
import UserCard from "../styled/UserCard";
import getRequest from "../../utils/getRequest";

function Search() {
  const [membersInfo, setMembersInfo] = useState(null);
  const [categoryDropdown, setCategoryDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    getRequest("/category-list").then(res => setCategoryDropdown(res));

    getRequest("/search-offer-all").then(res => setMembersInfo(res));
  }, []);

  if (!categoryDropdown || !membersInfo) return <h1>Loading...</h1>;

  return (
    <React.Fragment>
      <select
        onChange={e => {
          setActiveCategory(Number(e.target.value));
        }}
      >
        {categoryDropdown.map(category => {
          return (
            <option value={category.category_id} key={category.category_id}>
              {category.category_name}
            </option>
          );
        })}
      </select>
      {!activeCategory
        ? membersInfo.map(member => {
            return (
              <UserCard>
                <img src={member.avatar_url} />
                <div>
                  <p>{member.member_name}</p>
                  <p>{member.category_name}</p>
                  <p>{member.offer_name}</p>
                </div>
              </UserCard>
            );
          })
        : membersInfo.map(member => {
            console.log("this is active category", activeCategory);
            console.log("this is member id", member.category_id);
            console.log("this is all members", member);
            return member.category_id === activeCategory ? (
              <UserCard>
                <img src={member.avatar_url} />
                <div>
                  <p>{member.member_name}</p>
                  <p>{member.category_name}</p>
                  <p>{member.offer_name}</p>
                </div>
              </UserCard>
            ) : null;
          })}
    </React.Fragment>
  );
}

export default Search;
