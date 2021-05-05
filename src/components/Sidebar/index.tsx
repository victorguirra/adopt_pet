import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, MenuItem } from './styles';

import { AiFillHome, AiFillSignal } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';
import { GoSettings } from 'react-icons/go';
import { RiCheckboxMultipleFill } from 'react-icons/ri';

function Sidebar(){
    const { pathname } = useLocation();
    
    return(
        <Container>
            
            <MenuItem 
                to="/" 
                isActive={ pathname === '/' ? true : false }
            >
                <AiFillHome 
                    size={ 30 } 
                    color={ pathname === '/' ? '#68CAD7' : '#FFF' } 
                />
            </MenuItem>

            <MenuItem 
                to="/main" 
                isActive={ pathname === '/main' ? true : false }
            >
                <RiCheckboxMultipleFill 
                    size={ 30 } 
                    color={ pathname === '/main' ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/rotaASerCriada1" 
                isActive={ pathname === '/rotaASerCriada1' ? true : false }
            >
                <AiFillSignal 
                    size={ 30 } 
                    color={ pathname === '/rotaASerCriada1' ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/profile" 
                isActive={ pathname === '/profile'? true : false }
            >
                <BsPersonLinesFill 
                    size={ 30 } 
                    color={ pathname === '/profile' ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/settings" 
                isActive={ pathname === '/settings' ? true : false }
            >
                <GoSettings 
                    size={ 30 } 
                    color={ pathname === '/settings' ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>
        </Container>
    )
}

export default Sidebar;