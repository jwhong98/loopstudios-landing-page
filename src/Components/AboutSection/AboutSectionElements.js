import styled from "styled-components";

export const AboutSectionContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin-top: 40px;
`;

export const AboutImg = styled.img`
    width: 100%;
    margin-bottom: 30px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const AboutTitle = styled.h1`
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    margin-bottom: 20px;
    color: black;
    font-size: 2.25rem;
    font-weight: 400;
`;

export const AboutDescription = styled.p`
    text-align: center;
    font-size: 1.35rem;
    line-height: 1.5;
    color: hsl(0, 0%, 55%);
    font-family: 'Alata', sans-serif;
`;