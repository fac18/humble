import styled from "styled-components";

const Container = styled.div.attrs(props => ({
  direction: props.direction || "column",
  justify: props.justify || "space-between"
}))`
  display: flex;
  flex-flow: ${props => props.direction} nowrap;
  align-items: center;
  justify-content: ${props => props.justify};
  padding: var(--component-padding);
`;

export default Container;
