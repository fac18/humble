import React, { useState, useEffect } from "react";
import "./Search.css";

import getRequest from "../../utils/getRequest";

import UserProfile from "../UserProfile/UserProfile";
import Navbar from "../Navbar/Navbar";
import List from "../List/List";

import Button from "../styled/Button";
import P from "../styled/P";
import Container from "../styled/Container";
import H1 from "../styled/H1";
import H2 from "../styled/H2";
import H3 from "../styled/H3";
import H4 from "../styled/H4";
import BubbleButton from "../styled/BubbleButton";
import NavIcon from "../styled/NavIcon";

const Search = props => {
  const [allCategories, setAllCategories] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [allOffersCards, setAllOffersCards] = useState(null);
  const [allRequestsCards, setAllRequestsCards] = useState(null);
  const [toggleShare, setToggleShare] = useState(false);
  const [toggleMap, setToggleMap] = useState(false);
  const [viewUser, setViewUser] = useState(null);

  useEffect(() => {
    getRequest("/category-list").then(res => setAllCategories(res));
    getRequest("/search-offer-all").then(res => setAllOffersCards(res));
    getRequest("/search-request-all").then(res => setAllRequestsCards(res));
  }, []);

  if (!(allCategories && allOffersCards && allRequestsCards))
    return <H1>Loading...</H1>;

  return (
    <>
      {viewUser ? (
        <UserProfile user={viewUser} setViewUser={setViewUser} />
      ) : (
        <Container>
          <Container border="var(--border-width) solid var(--detail)">
            <Container
              direction="row"
              justify="space-around"
              padding="var(--space-xs)"
            >
              <H3>Search for things that you want...</H3>
              <Button
                onClick={() => {
                  setToggleShare(!toggleShare);
                  setActiveCategory(null); // reset category selection
                }}
              >
                {toggleShare ? "to learn" : "to share"}
              </Button>
            </Container>
            <Container
              direction="row"
              justify="space-around"
              padding="var(--space-xs)"
            >
              <H3>Choose a category:</H3>
              <select
                aria-label="Select things that people want help with"
                onChange={e => {
                  setActiveCategory(Number(e.target.value));
                }}
              >
                {allCategories.map(category => {
                  return (
                    <option
                      value={category.category_id}
                      key={category.category_id}
                      selected={
                        activeCategory === category.category_id
                          ? "selected"
                          : ""
                      }
                    >
                      {category.category_name}
                    </option>
                  );
                })}
              </select>
            </Container>
          </Container>
          {!toggleShare ? (
            <List
              toggleShare={toggleShare}
              activeCategory={activeCategory}
              setViewUser={setViewUser}
              cards={allRequestsCards}
            />
          ) : (
            <List
              toggleShare={toggleShare}
              activeCategory={activeCategory}
              setViewUser={setViewUser}
              cards={allOffersCards}
            />
          )}
        </Container>
      )}
      <BubbleButton className="search-switch">
        <NavIcon>
          {toggleMap ? (
            <i className="fas fa-list-ul" />
          ) : (
            <i className="fas fa-map-marker-alt" />
          )}
        </NavIcon>
      </BubbleButton>
      <Navbar />
    </>
  );
};

export default Search;
