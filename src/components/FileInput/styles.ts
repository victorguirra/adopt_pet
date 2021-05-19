import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction:column;

    > label {
        margin-left:.2rem;
    }

    > .wrapper {
        height:5rem;
        margin-top:.8rem;

        border:2px dashed ${({ theme }) => theme.colors.purple_500 };
        border-radius:.5rem;

        background-color:${({ theme }) => theme.colors.gray_200 };

        display:flex;
        align-items:center;
        justify-content:center;

        > .fileButtonContainer {
            position: relative;
            overflow: hidden;
            cursor:pointer;
           
            > button {
                color:${({ theme }) => theme.colors.purple_500 };
                background-color:transparent;
                
                font-size:1rem;
                
                display:flex;
                align-items:center;
                gap:1rem;
            }

            > input[type=file] {
                font-size: 100px;
                position: absolute;
                left: 0;
                top: 0;
                opacity: 0;
                cursor:pointer;
            }
        }
    }    
`;