import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height:100vh;
    padding:3rem;
    
    background-color:${({ theme }) => theme.colors.gray_300 };
    
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

    > main {
        margin-top:3rem;
        
        display:flex;
        flex-wrap:wrap;
        gap:3rem;
    }
`;

export const NewPostButton = styled(Link)`
    width:4rem;
    height:4rem;
    border-radius:50%;

    background-color:${({ theme }) => theme.colors.purple_500 };

    position:absolute;
    bottom:3rem;
    right:3.5rem;

    display:flex;
    align-items:center;
    justify-content:center;
`;