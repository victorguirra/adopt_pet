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
                className={ pathname === '/' ? 'isActive' : '' }
            >
                <AiFillHome 
                    size={ 30 } 
                    color={ pathname === '/' ? '#68CAD7' : '#FFF' } 
                />
            </MenuItem>

            <MenuItem 
                to="/main" 
                className={ pathname === '/main' ? 'isActive' : '' }
            >
                <RiCheckboxMultipleFill 
                    size={ 30 } 
                    color={ pathname === '/main' ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/rotaASerCriada1" 
                className={ pathname === '/rotaASerCriada1' ? 'isActive' : '' }
            >
                <AiFillSignal 
                    size={ 30 } 
                    color={ pathname === '/rotaASerCriada1' ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/profile" 
                className={ pathname === '/profile'? 'isActive' : '' }
            >
                <BsPersonLinesFill 
                    size={ 30 } 
                    color={ pathname === '/profile' ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>

            <MenuItem 
                to="/settings" 
                className={ pathname === '/settings' ? 'isActive' : '' }
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