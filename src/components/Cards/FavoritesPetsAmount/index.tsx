import React from 'react';
import { Container, ViewMoreButton } from'./styles';

import { BiDotsVerticalRounded } from 'react-icons/bi';

function FavoritesPetsAmount(){
    return(
        <Container>
            <h3>Quantos pets <br/> você favoritou?</h3>

            <div className="amountContainer">
                <h3>14</h3>
                <p>pets foram favoritados por você <br/> na última semana</p>
            </div>

            <div className="dateContainer">
                <p>
                    Abril <b>22</b> - Abril <b>29</b>
                </p>
            </div>

            <ViewMoreButton to="/">Ver meus pets favoritos</ViewMoreButton>

            <button>
                <BiDotsVerticalRounded size={ 30 } color="#9e9d9d" />
            </button>
        </Container>
    )
}

export default FavoritesPetsAmount;