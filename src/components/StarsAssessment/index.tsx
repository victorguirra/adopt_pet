import React from 'react';
import { Container } from './styles';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface IStarsAssessment {
    starsAmount: number
}

function StarsAssessment({ starsAmount } : IStarsAssessment){
    //const starsAmount = 4;

    const fillStars = new Array(starsAmount).fill('');
    const outlineStars = new Array(5 - starsAmount).fill('');

    return(
        <Container>
            { fillStars.map((_, index) => (
                <AiFillStar key={ index } size={ 25 } color="#f7ec19" />
            ))}

            { outlineStars.map((_, index) => (
                <AiOutlineStar key={ index } size={ 25 } color="#f7ec19" />
            ))}
        </Container>
    )
}

export default StarsAssessment;