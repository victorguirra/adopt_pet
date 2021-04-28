import React, { ReactNode } from 'react';
import { Container } from './styles';

import Sidebar from '../Sidebar';
import Content from '../Content';

interface ILayoutProps {
    children: ReactNode;
}

function Layout({ children } : ILayoutProps){
    return(
        <Container>
            <Sidebar />
            <Content>
                { children }
            </Content>
        </Container>
    )
}

export default Layout;