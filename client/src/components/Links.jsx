import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
  className: "navbar-nav w-100",
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse p-2",
})``;

const Links = () => {
  return (
    <React.Fragment>
      <Link to='/' className='navbar-brand'>
        Cinema Mern App
      </Link>
      <Collapse>
        <List className='w'>
          <Item>
            <Link to='/movies/list' className='nav-link'>
              List Movies
            </Link>
          </Item>
          <Item>
            <Link to='/movies/create' className='nav-link'>
              Create Movie
            </Link>
          </Item>
          <Item className='ml-auto'>
            <a
              href='https://github.com/Balraj4347'
              target='_blank'
              className='nav-link '
            >
              Github
            </a>
          </Item>
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default Links;
