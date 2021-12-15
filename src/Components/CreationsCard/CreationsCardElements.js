import styled from "styled-components";

export const CreationsCardContainer = styled.div`
    width: 100%;
    background-image: url(${props => props.img});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 150px;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    padding-bottom: 40px;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: hsl(0, 0%, 0%);
    }

    @media screen and (min-width: 400px) {
        margin-bottom: 1rem;
    }
`;

export const TextWrapper = styled.div`
    width: 130px;
    padding: 0;
    margin: 0px;
`;

export const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
    padding: 0px;
    margin: 0px;
`;