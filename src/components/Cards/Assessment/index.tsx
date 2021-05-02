import React from 'react';
import { Container, Card, ViewMoreButton } from './styles';

import StarsAssessment from '../../../components/StarsAssessment';

import Assessments from '../../../utils/assessments';

import DogIcon from '../../../assets/images/animals/dog.png';

import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';

function Assessment(){
    return(
        <Container>
            <header>
                <h3>Avaliações</h3>

                <ViewMoreButton to="/">
                    Ver mais avaliações
                    <FiArrowRight size={ 25 } color="#68CAD7" />
                </ViewMoreButton>
            </header>

            <main>
                { Assessments.map((item, index) => (
                    <Card key={ index }>
                       <div className="profileInfos">
                           <div>
                               <img src={ DogIcon } alt="Dog" />
                           </div>
                           <span>{ item.author }</span>
                       </div>
   
                       <div className="assessment">
                           <h4>
                               { item.title } 
                               <StarsAssessment starsAmount={ item.stars }/>
                            </h4>
                           <p>{ item.description }</p>
                       </div>
                       
                       <div className="status">
                            { item.isPositive
                                ? <AiFillLike size={ 35 } color="#14ff53" />
                                : <AiFillDislike size={ 35 } color="#f20c46" />
                            }
                       </div>
                   </Card> 
                ))}
            </main>
        </Container>
    )
}

export default Assessment;