import styled from 'styled-components';

export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    background: transparent;
    justify-content: center;
    font-size: 1.5rem;
    z-index: 10;
    position: absolute;
    color: #fff;
    top: 0;
    left: 0;

    @media screen  and (min-width: 640px){
       justify-content: center;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;

    @media screen and (min-width: 640px) {
        width: 85%;
    }
`;

export const NavLogo = styled.h1`
    font-family: 'Alata', sans-serif;
`;

export const MobileIcon = styled.div`
    cursor: pointer;

    @media screen and (min-width: 640px) {
        display: none;
    }
`;

export const NavMenu = styled.ul`
    display: none;

    @media screen and (min-width: 640px) {
        width: 450px;
        display: flex;
        list-style: none;
        justify-content: space-between;
    }
`;

export const NavItem = styled.li`
    font-size: 1rem;
    font-family: 'Alata', sans-serif;
`;

export const NavLink = styled.a`
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

