import React from 'react';
import CreationsCard from '../CreationsCard';
import { CreationsContainer, CreationsTitle, CreationsButton } from './CreationsElements';
import data from './data.json';

const Creations = () => {

    const createCard = (info) => {
        return (
            <CreationsCard 
                key={info.id}
                img={info.img}
                title={info.title}
            />
        )
    }
    return (
        <CreationsContainer>
            <CreationsTitle>our creations</CreationsTitle>
            {data.map(createCard)}
            <CreationsButton>see all</CreationsButton>
        </CreationsContainer>
    )
}

export default Creations;
