import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    padding:3rem;
    
    background-color:${({ theme }) => theme.colors.gray_300 };

    display:flex;
    flex-wrap:wrap;
    gap:3rem;

    overflow-y:scroll;

    ::-webkit-scrollbar{
        width:.6rem;
    }
    ::-webkit-scrollbar-thumb{
        background-color:${({ theme }) => theme.colors.blue };
        border-radius:.8rem;
    }
    ::-webkit-scrollbar-track{
        background-color:${({theme}) => theme.colors.gray_300 };
        border-radius:.8rem;
    }
`;