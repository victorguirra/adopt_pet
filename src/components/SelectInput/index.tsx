import React, { SelectHTMLAttributes } from 'react';
import { Container } from './styles';

interface ISelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: IOptionsData[];
}

interface IOptionsData {
    title: string;
    value: string;
} 

function SelectInput({ label, options, ...rest } : ISelectInputProps){
    return(
        <Container>
            <label>{ label }</label>

            <select { ...rest }>
                { options.map(option => (
                    <option key={ option.value } value={ option.value }>{ option.title }</option>
                ))}
            </select>
        </Container>
    )
}

export default SelectInput;