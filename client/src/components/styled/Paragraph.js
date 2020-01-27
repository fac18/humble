import styled from "styled-components";

// styled is a factory with helper methods for all (most?) html tags
// .attrs is a constructor on these which adjusts or adds attributes to props via merge
// props can then be accessed via interpolating functions within the template literal like ${...}
const Paragraph = styled.p.attrs(props => ({
  size: props.size || "--space-md"
}))`
  color: var(--primary);
  font-size: var(${props => props.size});
`;

export default Paragraph;
