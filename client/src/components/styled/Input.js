import styled from "styled-components";

const Input = styled.input`
  text-align: center;
  background: none;
  border: none;
  border-bottom: 1px solid var(--detail);
  padding: var(--component-padding);
  margin: var(--component-margin);

  &:focus {
    background-color: var(--secondary);
    border-bottom: none;
  }
`;

export default Input;
