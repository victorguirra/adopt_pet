import React, { ReactNode } from 'react';
import { Container } from './styles';

interface IContentProps {
    children: ReactNode;
}

function Content({ children }: IContentProps){
    return(
        <Container>
            { children }
        </Container>
    )
}

export default Content;