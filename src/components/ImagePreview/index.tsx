import React from 'react';
import { Container } from './styles';

import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';

interface IImagePreviewProps {
    images: IUploadedImages[];
    handleRemoveUploadedImage(title: string): any;
}

interface IUploadedImages {
    title: string;
    source: string;
}

function ImagePreview({ images, handleRemoveUploadedImage } : IImagePreviewProps){
    return(
        <Container>
            { images.length === 0 && <p>Suas fotos aparecerão aqui...</p> }
            
            { images.length > 0 && images.map(item => (
                <main key={ item.title }>
                    <div className="imageWrapper">
                        <img src={ item.source } alt={ item.title } />
                        
                        <button type="button" onClick={ () => handleRemoveUploadedImage(item.title) }>
                            <AiOutlineClose size={ 15 } color="#FFF" />
                        </button>
                    </div>

                    <footer>
                        <span>{ item.title }</span>
                        <AiOutlineCheckCircle size={ 15 } color="#04D361" />
                    </footer>
                </main>
            ))}
        </Container>
    )
}

export default ImagePreview;