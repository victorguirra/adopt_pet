import React from 'react';
import { Container, ImagesScrollContainer, ViewMoreButton } from './styles';

import { FiArrowRight } from 'react-icons/fi';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import DogIcon from '../../../assets/images/animals/dog.png';
import CatIcon from '../../../assets/images/animals/cat.png';
import FishIcon from '../../../assets/images/animals/fish.png';
import BirdIcon from '../../../assets/images/animals/bird.png';
import HamsterIcon from '../../../assets/images/animals/hamster.png';
import RabbitIcon from '../../../assets/images/animals/rabbit.png';
import TurtleIcon from '../../../assets/images/animals/turtle.png';
import PapagaioIcon from '../../../assets/images/animals/papagaio.png';

interface IPopularAnimalsData {
    title: string;
    image: string;
}

function PopularPets(){
    const popularAnimals: IPopularAnimalsData[] = [
        { title:'Dog', image: DogIcon },
        { title:'Cat', image: CatIcon },
        { title:'Fish', image: FishIcon },
        { title:'Bird', image: BirdIcon },
        { title:'Hamster', image: HamsterIcon },
        { title:'Rabbit', image: RabbitIcon },
        { title:'Turtle', image: TurtleIcon },
        { title:'Papagaio', image: PapagaioIcon },
    ];

    return(
        <Container>
            <h3>Pets mais populares</h3>
            <p>Você encontra alguns <br/> desses pets por aqui!</p>

            <ImagesScrollContainer>
                { popularAnimals.map((animal, index) => (
                    <div key={ index }>
                        <img src={ animal.image } alt={ animal.title } />
                    </div>
                ))}
            </ImagesScrollContainer>

            <ViewMoreButton to="/">
                Ver mais pets
                <FiArrowRight size={ 25 } color="#68CAD7" />
            </ViewMoreButton>

            <button>
                <BiDotsVerticalRounded size={ 30 } color="#9e9d9d" />
            </button>
        </Container>
    )
}

export default PopularPets;