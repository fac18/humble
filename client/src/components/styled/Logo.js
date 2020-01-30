import styled from "styled-components";

// by merging the children prop in on component definition, there's no need to pass it in at point of render

const Logo = styled.h1.attrs(props => ({
  children: "humble"
}))`
  font-family: "Comfortaa Medium", "Comfortaa", sans-serif;
  font-size: var(--font-logo);
  padding: var(--space-xxxs) var(--component-padding);
  margin: var(--space-xxxs) var(--component-margin);
`;

export default Logo;
