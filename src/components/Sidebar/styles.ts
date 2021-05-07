import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color:${({ theme }) => theme.colors.blue };

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:80px;
`;

export const MenuItem = styled(Link)`
    width:3rem;
    height:3rem;
    
    border-radius:.7rem;
    background-color:transparent;

    display:flex;
    align-items:center;
    justify-content:center;

    &.isActive {
        background-color:${({ theme }) => theme.colors.white };
    }
`;