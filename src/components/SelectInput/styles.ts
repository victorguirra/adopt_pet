import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;

    > label {
        margin-left:.2rem;
    }

    select {
        width:100%;
        height:100%;

        padding:.5rem .8rem;
        margin-top:.8rem;

        border:2px solid ${({ theme }) => theme.colors.gray_500 };
        border-radius:.5rem;

        resize:none;
        transition:border .3s;

        &:focus {
            border:2px solid ${({ theme }) => theme.colors.purple_500 };
        }
    }
`;