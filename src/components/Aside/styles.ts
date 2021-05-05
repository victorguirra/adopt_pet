import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width:15%;
    height:100%;

    padding:2rem 0;

    border-radius:1.3rem;
    background-color:${({ theme }) => theme.colors.orange };

    .profileInfo {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        > img {
            width:7rem;
            height:7rem;
            
            object-fit:cover;
            border-radius:50%;
        }

        > span {
            color:${({ theme }) => theme.colors.gray_300 };
            margin-top:1rem;
            text-decoration:underline;
        }
    }
`;

export const NavContainer = styled.nav`
    padding:0 1.5rem;
    margin-top:4rem;
    
    display:flex;
    flex-direction:column;
`;

export const NavItem = styled(Link)`
    color:${({ theme }) => theme.colors.white };
    text-decoration:none;
    
    display:flex;
    align-items:center;
    gap:.6rem;

    &:not(:first-of-type){
        margin-top:2rem;
    }
`;