import React from 'react';
import { Container, ViewMoreButton } from'./styles';

import { BiDotsVerticalRounded } from 'react-icons/bi';

function FavoritesPetsAmount(){
    const currentDate = new Date();
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    function getMonthInPortuguese(month: string){
        if(month === 'Apr') { return 'Abril' };
        if(month === 'May') { return 'Maio' };
    }

    return(
        <Container>
            <h3>Quantos pets <br/> você favoritou?</h3>

            <div className="amountContainer">
                <h3>14</h3>
                <p>pets foram favoritados por você <br/> na última semana</p>
            </div>

            <div className="dateContainer">
                <p>
                    { getMonthInPortuguese(sevenDaysAgo.toString().split(' ')[1]) }  <b>{ sevenDaysAgo.toString().split(' ')[2] }</b>
                </p>
                <p>-</p>
                <p>     
                    { getMonthInPortuguese(currentDate.toString().split(' ')[1]) }  <b>{ currentDate.toString().split(' ')[2] }</b>
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