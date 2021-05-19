import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
}

function Input({ label, placeholder, ...rest } : IInputProps){
    return(
        <Container>
            <label>{ label }</label>
            <input placeholder={ placeholder } { ...rest } />
        </Container>
    )
}

export default Input;