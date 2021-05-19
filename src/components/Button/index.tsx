import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

function Button({ children, ...rest } : IButtonProps){
    return(
        <Container { ...rest } >
            { children }
        </Container>
    )
}

export default Button;