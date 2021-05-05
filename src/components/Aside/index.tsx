import React from 'react';
import { Container, NavContainer, NavItem } from './styles';

import { AiOutlinePlus, AiFillHeart } from 'react-icons/ai';
import { MdSettings } from 'react-icons/md';
import { BsPersonFill, BsSearch } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';

function Aside(){
    return(
        <Container>
            <div className="profileInfo">
                <img src="https://avatars.githubusercontent.com/u/63051439?v=4" alt="Victor Guirra" />
                <span>Victor Guirra</span>
            </div>

            <NavContainer>
                <NavItem to="/">
                    <AiOutlinePlus size={ 25 } color="#FFF" />
                    Cadastrar Pet
                </NavItem>
                <NavItem to="/">
                    <AiFillHeart size={ 25 } color="#FFF" />
                    Pets Favoritos
                </NavItem>
                <NavItem to="/main">
                    <BsSearch size={ 25 } color="#FFF" />
                    Encontrar Pets
                </NavItem>
                <NavItem to="/">
                    <IoMdContact size={ 25 } color="#FFF" />
                    Seus contatos
                </NavItem>
                <NavItem to="/settings">
                    <MdSettings size={ 25 } color="#FFF" />
                    Configurações
                </NavItem>
                <NavItem to="/profile">
                    <BsPersonFill size={ 25 } color="#FFF" />
                    Perfil
                </NavItem>
            </NavContainer>

        </Container>
    )
}

export default Aside;