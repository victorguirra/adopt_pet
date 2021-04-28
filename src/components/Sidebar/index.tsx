import React, { useState } from 'react';
import { Container, MenuItem } from './styles';

import { AiFillHome, AiFillSignal } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';
import { GoSettings } from 'react-icons/go';
import { RiCheckboxMultipleFill } from 'react-icons/ri';

function Sidebar(){
    const [ activeMenuItem, setActiveMenuItem ] = useState(0);

    return(
        <Container>
            
            <MenuItem 
                to="/" 
                isActive={ activeMenuItem === 0 ? true : false }
                onClick={ () => setActiveMenuItem(0) }
            >
                <AiFillHome 
                    size={ 30 } 
                    color={ activeMenuItem === 0 ? '#68CAD7' : '#FFF' } 
                />
            </MenuItem>
            
            <MenuItem 
                to="/" 
                isActive={ activeMenuItem === 1 ? true : false }
                onClick={ () => setActiveMenuItem(1) }
            >
                <AiFillSignal 
                    size={ 30 } 
                    color={ activeMenuItem === 1 ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/" 
                isActive={ activeMenuItem === 2 ? true : false }
                onClick={ () => setActiveMenuItem(2) }
            >
                <RiCheckboxMultipleFill 
                    size={ 30 } 
                    color={ activeMenuItem === 2 ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/profile" 
                isActive={ activeMenuItem === 3 ? true : false }
                onClick={ () => setActiveMenuItem(3) }
            >
                <BsPersonLinesFill 
                    size={ 30 } 
                    color={ activeMenuItem === 3 ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/settings" 
                isActive={ activeMenuItem === 4 ? true : false }
                onClick={ () => setActiveMenuItem(4) }
            >
                <GoSettings 
                    size={ 30 } 
                    color={ activeMenuItem === 4 ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>
        </Container>
    )
}

export default Sidebar;