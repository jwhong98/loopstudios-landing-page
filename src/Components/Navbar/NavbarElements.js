import styled from 'styled-components';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    align-items: flex-end;
    background: transparent;
    font-size: 1.5rem;
    z-index: 10;
    margin-top: -80px;
    position: sticky;
    color: #fff;
    top: 0;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 30px;
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
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
    }
`;

export const NavItem = styled.li`

`;

export const NavLink = styled.a`

`;

