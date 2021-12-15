import styled from "styled-components";
import img2 from '../../image/desktop/image-hero.jpg';

export const HeroSectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 810px;
    z-index: 2;
    position: relative;
    z-index: 1;
    margin-bottom: 1rem;

    @media screen and (min-width: 640px) {
        background-image: url(${img2});
        background-size: 100%;
        height: 650px;
        justify-content: flex-start;
        padding: 0 10rem;
        margin-bottom: 100px;
    }
`;

export const HeroImg = styled.img`
    z-index: -1;
    position: absolute;
    width: 100%;
    min-width: 100%;
    min-height: 100%;
`;

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 240px;
    text-align: left;
    color: #fff;
    border: 3px solid #fff;
    padding: 0 20px;
    word-spacing: 999rem;

    @media screen and (min-width: 640px) {
        width: 650px;
        word-spacing: unset;
        border: 2px solid #fff;
        padding: 30px;
    }
`;

export const Text = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    font-size: 2.65rem;
    margin: 0px;
    padding: 0px;

    @media screen and (min-width: 640px){
        font-size: 4.5rem;
    }
`;
