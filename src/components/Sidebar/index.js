import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/"> Pizzas </SidebarLink>
                <SidebarLink to="/"> Sobremesas </SidebarLink>
                <SidebarLink to="/"> Menu completo </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap> 
                <SidebarRoute to="/"> Peça agora </SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
