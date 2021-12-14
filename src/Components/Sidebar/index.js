import React from 'react'
import { SidebarContainer, Header, Logo, Icon, CloseIcon, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer  isOpen={isOpen} onClick={toggle}>
            <Header>
                <Logo>loopstudios</Logo>
                <Icon>
                    <CloseIcon />
                </Icon>
            </Header>
            <SidebarMenu>
                <SidebarLink onClick={toggle}>about</SidebarLink>
                <SidebarLink onClick={toggle}>careers</SidebarLink>
                <SidebarLink onClick={toggle}>events</SidebarLink>
                <SidebarLink onClick={toggle}>products</SidebarLink>
                <SidebarLink onClick={toggle}>support</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar;
