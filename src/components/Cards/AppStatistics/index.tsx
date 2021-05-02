import React from 'react';
import { Container} from './styles';

import DataCard from './DataCard';

import { FaDog, FaCat } from 'react-icons/fa';

function AppStatistics(){
    return(
        <Container>
            <DataCard 
                title="Cachorros"
                color="#FB9C80"
                amountAdoptionsInLastHour={ 30 }
            >
                <FaDog size={ 35 } color="#FFF" />
            </DataCard>

            <DataCard 
                title="Gatos"
                color="#AABBF3"
                amountAdoptionsInLastHour={ 57 }
            >
                <FaCat size={ 35 } color="#FFF" />
            </DataCard>
        </Container>
    )
}

export default AppStatistics;