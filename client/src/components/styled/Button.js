import styled from "styled-components";

// the amphersand & is read by stylin as a reference to the parent component (i.e. Button)
// this is the method by which we apply pseudo-classes to the styled component
// it's also the means by which we might select its siblings (adjacent or otherwise)
// cf. https://styled-components.com/docs/basics#coming-from-css (scroll down to 'Pseudoelements...')

const Button = styled.button`
  ${"" /* font-size: var(--font-h4); */}
  font-weight: 400;
  padding: var(--component-padding) var(--space-lg);
  margin: var(--component-margin);
  border-radius: var(--space-md);
  border: var(--border-width) solid var(--detail);
  background: none;

  &:hover {
    background-color: var(--secondary);
  }
`;

export default Button;
