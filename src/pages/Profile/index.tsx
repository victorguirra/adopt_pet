import React from 'react';
import { Container } from './styles';

import { FaWhatsapp } from 'react-icons/fa';  
import { AiOutlineInstagram } from 'react-icons/ai';

interface IProfileData {
    key: string;
    title: string;
    amount: number;
}

function Profile(){
    const imageURL = "https://avatars.githubusercontent.com/u/63051439?v=4";
    
    const profileData: IProfileData[] = [
        { key: 'Favorite Pets', title: 'Pets Favoritados', amount: 79 },
        { key: 'Registered Pets', title: 'Pets Cadastrados', amount: 12 },
        { key: 'Contacts', title: 'Contatos Adicionados', amount: 34 },
    ]

    return(
        <Container>
            <h1>Meu Perfil</h1>
            
            <main>
                <img src={ imageURL } alt="Victor Guirra" />
                <p>Victor Guirra</p>
                <span>Riacho Fundo I - Brasília, DF</span>
                <div className="medias">
                    <p>
                        <FaWhatsapp size={ 25 } color="#000" />
                        (61) 98562-2749
                    </p>
                    <p>|</p>
                    <p>
                        <AiOutlineInstagram size={ 25 } color="#000" />
                        _guirra
                    </p>
                </div>

                <footer>
                    { profileData.map(item => (
                        <div key={ item.key }>
                            <span>{ item.amount }</span>
                            <p>{ item.title }</p>
                        </div>
                    ))}
                </footer>
            </main>
        </Container>
    )
}

export default Profile;