import React from 'react';
import { Container } from './styles';

import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import DogIcon from '../../assets/images/logo/dog.png';

function Footer(){
    return(
        <Container>
            <div className="logo">
                <img src={ DogIcon } alt="Adote um Pet" /> 
                <span>Adote um pet</span>
            </div>

            <div className="rightsReserved">
                <AiOutlineCopyrightCircle size={ 30 } color="#9e9d9d" />
                <p>Todos os direitos reservados</p>
            </div>

            <div className="iconsContainer">
                <a href="http://google.com.br">
                    <FaFacebookF size={ 30 } color="#AABBF3" />
                </a>
                <a href="http://google.com.br">
                    <FaInstagram size={ 30 } color="#AABBF3" />
                </a>
                <a href="http://google.com.br">
                    <FaTwitter size={ 30 } color="#AABBF3" />
                </a>
                <a href="http://google.com.br">
                    <FaWhatsapp size={ 30 } color="#AABBF3" />
                </a>
            </div>
        </Container>
    )
}

export default Footer;