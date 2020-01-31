import React from "react";
import "./List.css";

import UserCard from "../styled/UserCard";
import P from "../styled/P";
import Container from "../styled/Container";
import H4 from "../styled/H4";

const List = ({ toggleShare, activeCategory, cards, setViewUser }) =>
  activeCategory
    ? cards.map(member => {
        return member.category_id === activeCategory ? (
          <UserCard onClick={() => setViewUser(member.member_id)}>
            <img
              src={member.avatar_url}
              alt={`${member.member_name}'s avatar`}
            />
            <Container>
              <H4>{member.member_name}</H4>
              <P>{member.postcode}</P>
              <P>{toggleShare ? member.offer_name : member.request_name}</P>
            </Container>
          </UserCard>
        ) : null;
      })
    : cards.map(member => {
        return (
          <UserCard onClick={() => setViewUser(member.member_id)}>
            <img
              src={member.avatar_url}
              alt={`${member.member_name}'s avatar`}
            />
            <Container>
              <H4>{member.member_name}</H4>
              <P>{member.postcode}</P>
              <P>{member.category_name}</P>
              <P>{toggleShare ? member.offer_name : member.request_name}</P>
            </Container>
          </UserCard>
        );
      });

export default List;
