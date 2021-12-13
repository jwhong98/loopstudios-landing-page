import React from 'react'
import { CreationsCardContainer, TextWrapper, Title } from './CreationsCardElements';

const CreationsCard = (props) => {
    return (
        <CreationsCardContainer img={props.img}>
            <TextWrapper>
                <Title>{props.title}</Title>
            </TextWrapper>
        </CreationsCardContainer>
    )
}

export default CreationsCard;
