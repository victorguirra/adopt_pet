import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    //width:21rem;
    width:25%;
    height:22rem;

    background-color:${({ theme }) => theme.colors.white };
    border-radius:.7rem;

    position:relative;
    padding:3rem 2rem;

    .amountContainer {
        margin-top:3rem;

        display:flex;
        align-items:center;

        > h3 {
            font-size:2.3rem;
        }

        > p {
            color:${({ theme }) => theme.colors.gray_800 };
            font-size:.8rem;

            margin-left:1rem;
        }
    }

    .dateContainer {
        padding-left:3.2rem;
        margin-top:.8rem;

        display:flex;
        gap:.4rem;

        > p {
            color:${({ theme }) => theme.colors.gray_800 };
            font-size:.9rem;

            b {
                color:${({ theme }) => theme.colors.black };
            }
        }
    }

    button {
        background-color:transparent;
        position:absolute;
        top:1rem;
        right:.5rem;
    }
`;

export const ViewMoreButton = styled(Link)`
    width:80%;
    height:3rem;
    
    color:${({ theme }) => theme.colors.white };
    background-color:${({ theme }) => theme.colors.blue };
    
    text-decoration:none;
    
    border-top-left-radius:2rem;
    border-top-right-radius:2rem;

    position:absolute;
    bottom:0;
    left: 50%;
    transform: translate(-50%, 0);

    display:flex;
    align-items:center;
    justify-content:center;
`;