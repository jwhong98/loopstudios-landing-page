import React from 'react'
import { FooterContainer, TextWrap, FooterLogo, FooterMenu, MenuItem, FooterLink,
SocialMenu, SocialItem, SocialIcon, Copyright, Credit, CreditLink } from './FooterElements';
import img1 from '../../image/icon-facebook.svg';
import img2 from '../../image/icon-twitter.svg';
import img3 from '../../image/icon-pinterest.svg';
import img4 from '../../image/icon-instagram.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <TextWrap>
                <FooterLogo>loopstudios</FooterLogo>
                <FooterMenu>
                    <MenuItem>
                        <FooterLink>about</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink>careers</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink>events</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink>products</FooterLink>
                    </MenuItem>
                    <MenuItem>
                        <FooterLink>support</FooterLink>
                    </MenuItem>
                </FooterMenu>
                <SocialMenu>
                    <SocialItem>
                        <SocialIcon src={img1}/>
                    </SocialItem>
                    <SocialItem>
                        <SocialIcon src={img2}/>
                    </SocialItem>
                    <SocialItem>
                        <SocialIcon src={img3}/>
                    </SocialItem>
                    <SocialItem>
                        <SocialIcon src={img4}/>
                    </SocialItem>
                </SocialMenu>
                <Copyright>2021 Loopstudios. All rights reserved.</Copyright>
            </TextWrap>
            <Credit>
                Challenge by 
                <CreditLink href="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor. </CreditLink> 
                Coded by 
                <CreditLink a href="#"> Jaewon Hong.</CreditLink>
            </Credit>
        </FooterContainer>
    )
}

export default Footer;
