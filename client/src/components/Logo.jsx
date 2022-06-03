import React from "react";
import styled from "styled-components";

const Wrapper = styled.a.attrs({
  className: "navbar-brand",
})``;

const Logo = () => {
  const logo =
    "https://cdn.iconscout.com/icon/free/png-256/cinema-10-100418.png";

  return (
    <Wrapper href='/'>
      <img src={logo} width='50' height='50' alt='logo' />
    </Wrapper>
  );
};

export default Logo;
