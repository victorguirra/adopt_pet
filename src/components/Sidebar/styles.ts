import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IMenuItemProps {
    isActive?: boolean;
}

export const Container = styled.div`
    background-color:${({ theme }) => theme.colors.blue };

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:80px;
`;

export const MenuItem = styled(Link)<IMenuItemProps>`
    width:3rem;
    height:3rem;
    
    border-radius:.7rem;

    background-color:${ props => props.isActive 
        ? props.theme.colors.white
        : 'transparent' 
    };

    display:flex;
    align-items:center;
    justify-content:center;
`;