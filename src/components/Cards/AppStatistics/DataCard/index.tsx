import React, { ReactNode } from 'react';
import { Container } from './styles'; 

import { BsGraphUp } from 'react-icons/bs';

interface IDataCardProps {
    title: string;
    color: string;
    amountAdoptionsInLastHour: number;
    children: ReactNode;
}

function DataCard({ title, color, amountAdoptionsInLastHour, children } : IDataCardProps){
    const currentDate = new Date();
    const oneHourAgo = new Date(currentDate.getTime() - (1000*60*60));
    
    function getHoursOfDate(date: Date){
        const fullHour = date.toString().split(' ');
        const hour = fullHour[4].toString().slice(0, -3);

        return hour;
    }

    return(
        <Container color={ color }>
            <h3>{ title }</h3>

            <article>
                <div>
                    { children }
                </div>
                <section>
                    <p>
                        <BsGraphUp size={ 30 } color="#FFF" />
                        { amountAdoptionsInLastHour } { title.toLowerCase() } adotados <br/> na última hora
                    </p>
                    <span>{ getHoursOfDate(oneHourAgo) } - { getHoursOfDate(currentDate) }</span>
                </section>
            </article>
        </Container>
    )
}

export default DataCard;