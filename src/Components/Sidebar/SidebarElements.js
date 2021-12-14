import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 0%);
    top: 0;
    left: 0;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 10px 30px;
    position: absolute;
    top: 20px;
`;

export const Logo = styled.h1`
    color: #fff;
    font-family: 'Alata', sans-serif;
    font-size: 2rem;
    padding: 0;
    margin: 0;
`;

export const Icon = styled.div`
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 60px);
    
`;

export const SidebarLink = styled.a`
    color: #fff;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

