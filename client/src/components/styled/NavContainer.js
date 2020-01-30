import styled from "styled-components";

import Container from "./Container";

const NavContainer = styled(Container)`
  background-color: var(--secondary);
  min-width: 100vw;
  display: absolute;
  position: fixed;
  bottom: 0;
  border-top: var(--detail);
`;

export default NavContainer;
