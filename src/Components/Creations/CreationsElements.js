import styled from "styled-components";

export const CreationsContainer = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CreationsTitle = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-bottom: 50px;
`;

export const CreationsButton = styled.button`
    outline: none;
    background-color: #fff;
    border: 1.5px solid hsl(0, 0%, 0%);
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
    padding: 10px 40px;
    margin-bottom: 50px;
    letter-spacing: 5px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        background-color: hsl(0, 0%, 0%);
        color: #fff;
    }
`;