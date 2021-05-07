import React from 'react';
import { Container } from './styles';

import PetAdvertisement from '../../components/Cards/PetAdvertisement';

import catalog from '../../utils/catalog';

function Main(){
    return(
        <Container>
            { catalog.map((item, index) => (
                <PetAdvertisement key={ index } data={ item } />
            ))}
            
        </Container>
    )
}

export default Main;