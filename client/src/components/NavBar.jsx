import React from "react";
import styled from "styled-components";

import Links from "./Links";
import Logo from "./Logo";

const Container = styled.div.attrs({
  className: "container",
})`
  @media (max-width: 992px) {
    max-width: 1022px;
  }
  @media (max-width: 768px) {
    max-width: 883px;
  }
  @media (max-width: 576px) {
    max-width: 1369px;
}
  }
`;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
})`
  margin-bottom: 20 px;
  padding: 20px;
  width: 100%;
`;

const NavBar = () => {
  return (
    <Container>
      <Nav>
        <Logo />
        <Links />
      </Nav>
    </Container>
  );
};

export default NavBar;
