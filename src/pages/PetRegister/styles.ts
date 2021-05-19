import styled from 'styled-components';

export const Container = styled.div`
    padding:4rem;

    form {
        width:85%;
        margin-top:2rem;

        display:grid;
        grid-row-gap:3rem;
        grid-column-gap:4rem;
        grid-template-areas:
        'nameInput whatsappInput'
        'petNameInput petDescriptionTextarea'
        'categorySelectInput petDescriptionTextarea'
        'fileInput imagesPreview'
        'space submitButton';

        > div:nth-of-type(1) {
            grid-area:nameInput;
        }
        
        > div:nth-of-type(2) {
            grid-area:whatsappInput;
        }

        > div:nth-of-type(3) {
            grid-area:petNameInput;
        }

        > div:nth-of-type(4) {
            grid-area:categorySelectInput;
        }

        > div:nth-of-type(5) {
            grid-area:petDescriptionTextarea;
        }

        > div:nth-of-type(6) {
            grid-area:fileInput;
        }

        > div:nth-of-type(7) {
            grid-area:imagesPreview;
        }
        
        > button:nth-of-type(1) {
            grid-area:submitButton;
        }
    }
`;