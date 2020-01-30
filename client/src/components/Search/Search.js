import React, { useState, useEffect } from "react";
import "./Search.css";

import UserCard from "../styled/UserCard";
import getRequest from "../../utils/getRequest";
import UserProfile from "../UserProfile/UserProfile";
import Navbar from "../Navbar/Navbar";

import Button from "../styled/Button";
import P from "../styled/P";
import Container from "../styled/Container";
import H1 from "../styled/H1";
import H2 from "../styled/H2";
import H3 from "../styled/H3";

function Search() {
  const [allOffersCards, setAllOffersCards] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [allRequestsCards, setAllRequestsCards] = useState(null);
  const [toggleShare, setToggleShare] = useState(false);
  const [viewUser, setViewUser] = useState(null);

  useEffect(() => {
    getRequest("/category-list").then(res => setAllCategories(res));
    getRequest("/search-offer-all").then(res => setAllOffersCards(res));
    getRequest("/search-request-all").then(res => setAllRequestsCards(res));
  }, []);

  if (!allCategories || !allOffersCards || !allRequestsCards)
    return <H1>Loading...</H1>;

  return (
    <React.Fragment>
      {viewUser ? (
        <UserProfile
          user={viewUser}
          viewUser={viewUser}
          setViewUser={setViewUser}
        />
      ) : (
        <>
          <Container>
            <H2>Search for things that people want</H2>
            <Button onClick={() => setToggleShare(!toggleShare)}>
              {toggleShare ? "help with" : "to share"}
            </Button>
          </Container>

          {toggleShare ? (
            <>
              <H2>Choose a category:</H2>
              <select
                onChange={e => {
                  setActiveCategory(Number(e.target.value));
                }}
              >
                {allCategories.map(category => {
                  return (
                    <option
                      value={category.category_id}
                      key={category.category_id}
                    >
                      {category.category_name}
                    </option>
                  );
                })}
              </select>
              {!activeCategory
                ? allRequestsCards.map(member => {
                    return (
                      <UserCard onClick={() => setViewUser(member.member_id)}>
                        <img src={member.avatar_url} />
                        <Container>
                          <P>{member.member_name}</P>
                          <P>{member.category_name}</P>
                          <P>{member.request_name}</P>
                          <P>{member.postcode}</P>
                        </Container>
                      </UserCard>
                    );
                  })
                : allRequestsCards.map(member => {
                    return member.category_id === activeCategory ? (
                      <UserCard onClick={() => setViewUser(member.member_id)}>
                        <img src={member.avatar_url} />
                        <Container>
                          <P>{member.member_name}</P>
                          <P>{member.category_name}</P>
                          <P>{member.request_name}</P>
                          <P>{member.postcode}</P>
                        </Container>
                      </UserCard>
                    ) : null;
                  })}
            </>
          ) : (
            <>
              <H2>Choose a category:</H2>
              <select
                onChange={e => {
                  setActiveCategory(Number(e.target.value));
                }}
              >
                {allCategories.map(category => {
                  return (
                    <option
                      value={category.category_id}
                      key={category.category_id}
                    >
                      {category.category_name}
                    </option>
                  );
                })}
              </select>
              {!activeCategory
                ? allOffersCards.map(member => {
                    return (
                      <UserCard onClick={() => setViewUser(member.member_id)}>
                        <img src={member.avatar_url} />
                        <Container>
                          <P>{member.member_name}</P>
                          <P>{member.category_name}</P>
                          <P>{member.offer_name}</P>
                          <P>{member.postcode}</P>
                        </Container>
                      </UserCard>
                    );
                  })
                : allOffersCards.map(member => {
                    return member.category_id === activeCategory ? (
                      <UserCard onClick={() => setViewUser(member.member_id)}>
                        <img src={member.avatar_url} />
                        <Container>
                          <P>{member.member_name}</P>
                          <P>{member.category_name}</P>
                          <P>{member.offer_name}</P>
                          <P>{member.postcode}</P>
                        </Container>
                      </UserCard>
                    ) : null;
                  })}
            </>
          )}
        </>
      )}
      <Navbar />
    </React.Fragment>
  );
}

export default Search;
