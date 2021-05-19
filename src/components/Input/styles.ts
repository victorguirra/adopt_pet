import styled from 'styled-components';

export const Container = styled.div`
    width:100%;

    display:flex;
    flex-direction:column;

    > label {
        margin-left:.2rem;
    }

    > input{
        height:3rem;
        padding:0 .8rem;
        margin-top:.8rem;
        
        border:2px solid ${({ theme }) => theme.colors.gray_500 };
        border-radius:.5rem;

        transition:border .3s;

        &:focus {
            border:2px solid ${({ theme }) => theme.colors.purple_500 };
        }
    }

`;