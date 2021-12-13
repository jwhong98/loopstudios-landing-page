import React from 'react'
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    loopstudios
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Careers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Support</NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
