import styled from "styled-components";

const Container = styled.div.attrs(props => ({
  direction: props.direction || "column"
}))`
  display: flex;
  flex-flow: ${props => props.direction} nowrap;
  align-items: center;
  justify-content: space-around;
  padding: var(--component-padding);
`;

export default Container;
