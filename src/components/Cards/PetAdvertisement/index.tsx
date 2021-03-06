import React, { useState } from 'react';
import { Container, Header, Body, Footer } from './styles';

import Carousel from '../../Carousel';

import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiDislikeLine } from 'react-icons/ri';
import { IoPersonAddSharp, IoPersonRemoveSharp } from 'react-icons/io5';

interface IPetAdvertisementProps {
    data: IDataProps;
}

interface IDataProps {
    authorName: string;
    authorImage: string;
    contactNumber: string;
    announcementDate: string;
    isLiked: boolean;
    inYourContacts: boolean;
    petInfos: {
        category: string;
        name: string;
        description: string;
        images: IPetAdvertimentImagesProps[];
    };
}

interface IPetAdvertimentImagesProps {
    title: string;
    source: string;
}

function PetAdvertisement({ data } : IPetAdvertisementProps){
    const [ isLiked, setIsLiked ] = useState<boolean>(data.isLiked);
    const [ inYourContacts, setInYourContacts ] = useState<boolean>(data.inYourContacts);
    
    const whatsappInitialMessage = `Olá ${ data.authorName }, tudo bem? Estou interessado no ${ data.petInfos.name }, anunciado por você no site Adote um Pet! Podemos conversar?`;

    return(
        <Container>
            <Header>
                <main>
                    <img src={ data.authorImage } alt={ data.authorName } />
                    
                    <div>
                        <span>{ data.authorName }</span>
                        <span>{ data.announcementDate }</span>
                    </div>
                </main>

                <button onClick={ () => setInYourContacts(!inYourContacts) }>
                    { inYourContacts
                        ? <IoPersonRemoveSharp size={ 25 } color="#E33D3D" />
                        : <IoPersonAddSharp size={ 25 } color="#8257E5" />
                    }
                </button>
            </Header>

            <Body>
                <span>{ data.petInfos.name }</span>

                <p>{ data.petInfos.description }</p>

                <Carousel 
                    petName={ data.petInfos.name } 
                    petImages={ data.petInfos.images }
                />
            </Body>

            <Footer>
                <a href={`https://wa.me/55${ data.contactNumber }/?text=${ whatsappInitialMessage }`} target="blank">
                    <FaWhatsapp size={ 25 } color="#FFF" />
                    Entrar em contato
                </a>
                <button 
                    onClick={ () => setIsLiked(!isLiked) }
                    className={ isLiked ? 'isLiked' : '' }
                >
                    { isLiked
                        ? <RiDislikeLine size={ 25 } color="#FFF" />
                        : <AiOutlineHeart size={ 25 } color="#FFF" />
                    }
                </button>
            </Footer>
        </Container>
    )
}

export default PetAdvertisement;