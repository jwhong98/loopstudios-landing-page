import styled from "styled-components";
import img from '../../images/mobile/image-hero.jpg';

export const HeroSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 810px;
    z-index: 2;
    position: relative;
    background-image: url(${img});
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 1;
`;

export const TextWrapper = styled.div`
    width: 100%;
    text-align: left;
    color: #fff;
    border: 3px solid #fff;
    padding: 20px;
    word-spacing: 999rem;
`;

export const Text = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    font-size: 3rem;
    margin: 0px;
    padding: 0px;
`;
