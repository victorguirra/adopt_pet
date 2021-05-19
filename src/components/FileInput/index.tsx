import React from 'react';
import { Container } from './styles';

import { IoFolderOpenSharp } from 'react-icons/io5';

interface IFileInputProps {
    label: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>):void;
}

function FileInput({ label, onChange } : IFileInputProps){
    return(
        <Container>
            <label>{ label }</label>
            
            <div className="wrapper">
                <div className="fileButtonContainer">
                    <button>
                        <IoFolderOpenSharp size={ 30 } color="#8257E5" />
                        Selecione seus arquivos
                    </button>

                    <input 
                        type="file" 
                        multiple={ true } 
                        onChange={ onChange }
                        accept=".jpg, .jpeg, .png"
                    />
                </div>
            </div>
        </Container>
    )
}

export default FileInput;