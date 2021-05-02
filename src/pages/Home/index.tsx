import React from 'react';
import { 
    Container, 
    Content,  
    Aside
} from './styles';

import Header from '../../components/Header';
import FavoritesPetsAmountCard from '../../components/Cards/FavoritesPetsAmount';
import PopularPetsCard from '../../components/Cards/PopularPets';
import AppStatistics from '../../components/Cards/AppStatistics';
import Assessment from '../../components/Cards/Assessment';
import Climate from '../../components/Cards/Climate';

function Home(){
    return(
        <Container>
            <Header pageTitle="Página Inicial"/>
            
            <main>
                <Content>
                    <div className="row">
                        <FavoritesPetsAmountCard />
                        <PopularPetsCard />
                        <AppStatistics />
                    </div>
                    <div className="row">
                        {/* <Climate /> */}
                        <Assessment />
                    </div>
                </Content>

                <Aside>
                    aside
                </Aside>
            </main>
        </Container>
    )
}

export default Home;