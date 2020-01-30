import styled from "styled-components";
import { Link } from "react-router-dom";

const TextLink = styled(Link)`
  font-size: var(--font-p);
  color: var(--primary);
  padding: var(--space-xxxs) var(--component-padding);
  margin: var(--space-xxxs) var(--component-margin);

  &:visited {
    font-style: italic;
  }

  &:hover {
    color: black;
  }

  &:active {
    color: black;
  }
`;

export default TextLink;
