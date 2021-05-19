import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import SelectInput from '../../components/SelectInput';
import FileInput from '../../components/FileInput';
import ImagePreview from '../../components/ImagePreview';
import Button from '../../components/Button';

import Catalog from '../../utils/catalog';

import { AiOutlinePlusCircle } from 'react-icons/ai';

interface IUploadedImagesData {
    title: string;
    source: string;
}

function PetRegister(){
    const { push } = useHistory();

    const selectOptions = [
        { title:'Cachorro', value:'Dog' },
        { title:'Gato', value:'Cat' },
        { title:'Peixe', value:'Fish' },
    ]
    
    const [ authorName, setAuthorName ] = useState<string>('');
    const [ whatsappNumber, setWhatsappNumber ] = useState<string>('');
    const [ petName, setPetName ] = useState<string>('');
    const [ petDescription, setPetDescription ] = useState<string>('');
    const [ petCategory, setPetCategory ] = useState<string>(selectOptions[0].value);
    const [ uploadedImages, setUploadedImages ] = useState<IUploadedImagesData[] | []>([]);
    
    function handleUploadFiles(event: React.ChangeEvent<HTMLInputElement>){
        const uploadedFiles = event.target.files;

        uploadedFiles && Array.from(uploadedFiles).forEach(item => {
            const newUpload = { title: item.name, source: URL.createObjectURL(item) };
            const imageAlreadyIncluded = uploadedImages?.some(item => item.title === newUpload.title);
            
            if(!imageAlreadyIncluded){
                setUploadedImages(prevState => prevState.length === 0 ? [ newUpload ] : [...prevState, newUpload]);
            }
        })
    }

    function handleRemoveUploadedImagem(title: string){
        const filteredArray = uploadedImages.filter(item => item.title !== title);

        setUploadedImages(filteredArray);
    }

    function handleSubmitForm(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const currentDate = new Date().toLocaleDateString().split('/');
        const formatedCurrentDate = `${ currentDate[1] }/${ currentDate[0].padStart(2, '0') }/${ currentDate[2] }`;

        const data = {
            authorName,
            authorImage: 'https://avatars.githubusercontent.com/u/63051439?v=4',
            contactNumber: whatsappNumber,
            announcementDate: formatedCurrentDate,
            isLiked: false,
            inYourContacts: false,

            petInfos: {
                category: petCategory,
                name: petName,
                description: petDescription,
                images: uploadedImages
            }
        }

        Catalog.push(data);

        push('/main');
    }

    return(
        <Container>
            <h1>Registrar um Pet</h1>

            <form onSubmit={ handleSubmitForm }>
                <Input 
                    label="Seu nome" 
                    placeholder="Digite seu nome"
                    onChange={ event => setAuthorName(event.target.value) }
                />
                <Input 
                    label="Seu Whatsapp" 
                    placeholder="Digite seu número do whatsapp"
                    onChange={ event => setWhatsappNumber(event.target.value) }
                />
                <Input 
                    label="Nome do Pet" 
                    placeholder="Digite o nome do pet"
                    onChange={ event => setPetName(event.target.value) }
                />
                <SelectInput 
                    label="Selecione uma categoria" 
                    options={ selectOptions }
                    onChange={ event => setPetCategory(event.target.value) }
                />
                <TextArea 
                    label="Descrição do Pet" 
                    placeholder="Faça uma descrição breve do seu pet" 
                    onChange={ event => setPetDescription(event.target.value) }
                />
                <FileInput 
                    label="Fotos do Pet" 
                    onChange={ handleUploadFiles }
                />
                <ImagePreview 
                    images={ uploadedImages } 
                    handleRemoveUploadedImage={ handleRemoveUploadedImagem } 
                />
                <Button type="submit">
                    Anunciar Pet
                    <AiOutlinePlusCircle size={ 25 } color="#FFF" />
                </Button>
            </form>
        </Container>
    )
}

export default PetRegister;