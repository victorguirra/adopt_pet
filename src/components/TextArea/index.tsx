import React, { TextareaHTMLAttributes } from 'react';
import { Container } from './styles';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    placeholder: string;
}

function TextArea({ label, placeholder, ...rest } : ITextAreaProps){
    return(
        <Container>
            <label>{ label }</label>
            <textarea placeholder={ placeholder } { ...rest } />
        </Container>
    )
}

export default TextArea;