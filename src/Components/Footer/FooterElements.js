import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: hsl(0, 0%, 0%);
    height: 600px;
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

export const FooterLogo = styled.h1`
    font-family: 'Alata', sans-serif;
    font-weight: 400;
    margin-bottom: 50px;
    font-size: 2.25rem;
`;

export const FooterMenu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
`;

export const MenuItem = styled.li`
    text-transform: capitalize;
    font-family: 'Alata', sans-serif;
    margin-bottom: 30px;
    text-align: center;
`;

export const FooterLink = styled.a`

`;

export const SocialMenu = styled.ul`
    margin-bottom: 20px;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    width: 170px;
    justify-content: space-between;
`;

export const SocialItem = styled.li`

`;

export const SocialIcon = styled.img`

`;

export const Copyright = styled.p`
    font-family: 'Alata', sans-serif;
    font-weight: 400;
    color: hsl(0, 0%, 55%);
    margin-top: 30px;
`;

export const Credit = styled.div`
    margin-top: 10px;
    font-family: 'Alata', sans-serif;
    font-weight: 400;
    color: hsl(0, 0%, 55%);
`;

export const CreditLink = styled.a`
    color: #1976D2;
    text-decoration: none;
`;