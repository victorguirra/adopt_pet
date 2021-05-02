import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
    width:65%;
    height:17rem;
    
    background-color:${({ theme }) => theme.colors.white };
    border-radius:1rem;
    padding:1rem 1.3rem;

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

    header {
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    main {
        display:flex;
        flex-direction:column;
    }
`;

export const Card = styled.div`
    width:100%;

    display:flex;
    align-items:center;

    &:not(:first-of-type){
        margin-top:-1rem;
    }

    &:not(:last-of-type){
        padding-bottom:.8rem;
        border-bottom:2px solid ${({ theme }) => theme.colors.gray_300 };
    }

    .profileInfos {
        width:15%;
        word-wrap:break-word;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        > div {
            width:4rem;
            height:4rem;
            
            background-color:${({ theme }) => theme.colors.purple };
            border-radius:50%;

            display:flex;
            align-items:center;
            justify-content:center;

            img {
                width:2.8rem;
            }
        }

        > span {
            color:${({ theme }) => theme.colors.purple };
            font-weight:bold;
            margin-top:.7rem;
            text-align:center;
        }
    }

    .assessment {
        width:70%;

        margin-left:2rem;
        word-wrap:break-word;

        h4 {
            display:flex;
            gap:.4rem;
        }

        p {
            color:${({ theme }) => theme.colors.gray_800 };
            margin-top:.7rem;
        }
    }

    .status {
        margin-left:2rem;
    }
`;

export const ViewMoreButton = styled(Link)`
    color:${({ theme }) => theme.colors.blue };
    background-color:transparent;

    font-size:1rem;
    text-decoration:none;

    display:flex;
    align-items:center;
    justify-content:center;
    gap:.8rem;
`;