import React, { useState } from 'react';
import { Container, Dot } from './styles';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ICarouselProps {
    petName: string;
    petImages: IImagesProps[];
}

interface IImagesProps {
    title: string;
    source: string;
}

function Carousel({ petName, petImages } : ICarouselProps){
    const [ activeImage, setActiveImage ] = useState<string>(petImages[0].source);
    const selectedImageIndex = petImages.findIndex(item => item.source === activeImage);

    function handleShowBackImage(){
        if(selectedImageIndex !== 0){
            setActiveImage(petImages[selectedImageIndex - 1].source);
        }
    }
    
    function handleShowNextImage(){
        if(selectedImageIndex !== petImages.length - 1){
            setActiveImage(petImages[selectedImageIndex + 1].source);
        }
    }

    return(
        <Container>
            <main>
                <button onClick={ handleShowBackImage }>
                    <FiChevronLeft size={ 30 } color="#000" />
                </button>
                
                <img src={ activeImage } alt={ petName } />

                <button onClick={ handleShowNextImage }>
                    <FiChevronRight size={ 30 } color="#000" />
                </button>
            </main>

            <footer>
                { petImages.map((_,index) => (
                    <Dot 
                        key={ index } 
                        className={ selectedImageIndex === index ? 'isActive' : '' } 
                    />
                ))}
            </footer>
        </Container>
    )
}

export default Carousel;