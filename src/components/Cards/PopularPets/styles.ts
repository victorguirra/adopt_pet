import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    //width:30rem;
    width:38%;
    height:22rem;

    padding:3rem;
    position:relative;

    background-color:${({ theme }) => theme.colors.white };
    border-radius:.7rem;

    > p {
        color:${({ theme }) => theme.colors.gray_800 };
        margin-top:1rem;
    }


    > button {
        background-color:transparent;
        position:absolute;
        top:1rem;
        right:.5rem;
    }
`;

export const ImagesScrollContainer = styled.div`
    width:100%;
    
    margin-top:2rem;
    margin-bottom:2.4rem;
    padding-bottom:1rem;
    
    overflow:auto;
    white-space: nowrap;

    ::-webkit-scrollbar{
        height:.6rem;
    }
    ::-webkit-scrollbar-thumb{
        background-color:${({ theme }) => theme.colors.orange };
        border-radius:.8rem;
    }
    ::-webkit-scrollbar-track{
        background-color:${({theme}) => theme.colors.gray_300 };
        border-radius:.8rem;
    }

    > div {
        width:3rem;
        height:3rem;

        margin-right:1.5rem;

        border-radius:50%;
        background-color:${({ theme }) => theme.colors.purple };

        display:inline-block;
        position:relative;

        > img {
            width:2rem;
            height:2rem;
            
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
`;

export const ViewMoreButton = styled(Link)`
    width:100%;

    color:${({ theme }) => theme.colors.blue };
    background-color:transparent;

    font-size:1rem;
    text-decoration:none;

    display:flex;
    align-items:center;
    justify-content:center;
    gap:.8rem;
`;