import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { css } from 'styled-components/macro';
import { Button } from './Button';
import { CgMenuRight } from 'react-icons/cg';

const NavBar = ({ toggle, isOpen }) => {
  return (
    <Nav>
      <Logo to='/'> ELIXR </Logo>
      <MenuBars onClick={toggle} isOpen={isOpen} />

      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default NavBar;

const MenuBars = styled(CgMenuRight)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 40px;
    cursor: pointer;
    color: #ffffff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 30%);
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-size: 2rem;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
