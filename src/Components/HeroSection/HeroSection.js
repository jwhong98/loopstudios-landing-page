import styled from "styled-components";
import img from '../../image/mobile/image-hero.jpg';
import img2 from '../../image/desktop/image-hero.jpg';

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

    @media screen and (min-width: 640px) {
        background-image: url(${img2});
        background-size: 100%;
        height: 650px;
        justify-content: flex-start;
        padding: 0 10rem;
        margin-bottom: 100px;
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    text-align: left;
    color: #fff;
    border: 3px solid #fff;
    padding: 20px;
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
    font-size: 3rem;
    margin: 0px;
    padding: 0px;

    @media screen and (min-width: 640px){
        font-size: 4.5rem;
    }
`;
