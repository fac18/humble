import styled from "styled-components";

// styled is a factory with helper methods for all (most?) html tags
// the css is declared immediately adter within backticks `...`, and will be preprocessed by stylis if non-standard
// .attrs is a constructor on these which adjusts or adds attributes to props via merge
// props can then be accessed via interpolating functions within the template literal like ${...}

const P = styled.p.attrs(props => ({
  size: props.size || "--font-p"
}))`
  color: var(--primary);
  font-size: var(${props => props.size});
  padding: var(--space-xxxs) var(--component-padding);
  margin: var(--space-xxxs) var(--component-margin);
`;

export default P;
