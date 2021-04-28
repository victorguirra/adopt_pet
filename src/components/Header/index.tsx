import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import SunIcon from '../../assets/images/icons/sun.png';
import SunAndCloudIcon from '../../assets/images/icons/sun_and_cloud.png';
import MoonIcon from '../../assets/images/icons/moon.png';

function Header(){
    const [ receptionMessage, setReceptionMessage ] = useState<string>('');
    const [ recepctionMessageIcon, setReceptionMessageIcon ] = useState<string>('');

    const currentHour = new Date().getHours();

    useEffect(() => {
        if(currentHour >= 5 && currentHour < 14 ){
            setReceptionMessage('Bom dia');
            setReceptionMessageIcon(SunIcon);
        }

        else if(currentHour >= 14 && currentHour < 19){
            setReceptionMessage('Boa tarde');
            setReceptionMessageIcon(SunAndCloudIcon);
        }

        else {
            setReceptionMessage('Boa noite');
            setReceptionMessageIcon(MoonIcon);
        }

    }, [currentHour])

    return(
        <Container>
            <div>
                <h3>Adote um Pet</h3>
                <span>|</span>
                <h3>Página Inicial</h3>
            </div>

            <div>
                <p>
                    { receptionMessage }, <br/> 
                    <span>Victor Guirra</span>
                </p>
                <img src={ recepctionMessageIcon } alt={ receptionMessage } /> 
            </div>
        </Container>
    )
}

export default Header;