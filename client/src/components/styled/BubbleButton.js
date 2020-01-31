import styled from "styled-components";

const BubbleButton = styled.button`
  height: var(--space-xxl);
  width: var(--space-xxl);
  background-color: var(--primary);
  border-radius: 50%;
  color: (--primary);
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

export default BubbleButton;
