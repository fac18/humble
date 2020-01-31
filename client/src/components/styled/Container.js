import styled from "styled-components";

const Container = styled.div.attrs(props => ({
  direction: props.direction || "column",
  justify: props.justify || "space-between",
  border: props.border || null,
  padding: props.padding || "var(--component-padding)"
}))`
  display: flex;
  flex-flow: ${props => props.direction} nowrap;
  align-items: center;
  justify-content: ${props => props.justify};
  padding: ${props => props.padding};
  border: ${props => props.border};
`;

export default Container;
