import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, MenuItem } from './styles';

import { AiFillHome } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';
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
                to="/profile" 
                className={ pathname === '/profile'? 'isActive' : '' }
            >
                <BsPersonLinesFill 
                    size={ 30 } 
                    color={ pathname === '/profile' ? '#68CAD7' : '#FFF' }
                />
            </MenuItem>
        </Container>
    )
}

export default Sidebar;