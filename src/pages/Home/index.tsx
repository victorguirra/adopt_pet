import React from 'react';
import { 
    Container, 
    Content
} from './styles';

import Header from '../../components/Header';
import FavoritesPetsAmountCard from '../../components/Cards/FavoritesPetsAmount';
import PopularPetsCard from '../../components/Cards/PopularPets';
import AppStatistics from '../../components/Cards/AppStatistics';
import Assessment from '../../components/Cards/Assessment';
import Weather from '../../components/Cards/Weather';
import Footer from '../../components/Footer';
import Aside from '../../components/Aside';

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
                        <Weather />
                        <Assessment />
                    </div>
                    <div className="row">
                        <Footer />
                    </div>
                </Content>
                
                <Aside />
            </main>
        </Container>
    )
}

export default Home;