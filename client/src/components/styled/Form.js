import styled from "styled-components";

const Form = styled.form.attrs(props => ({}))`
  display: flex;
  flex-flow: column nowrap;
  padding: var(--component-padding);
  margin: var(--component-margin);
`;

export default Form;
