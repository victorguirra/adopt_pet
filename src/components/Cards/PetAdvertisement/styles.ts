import styled from 'styled-components';

export const Container = styled.header`
    width:25rem;
    height:35rem;
    padding:1rem;

    border-radius:.8rem;
    background-color:${({ theme }) => theme.colors.white };
`;

export const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    main {
        display:flex;
        align-items:center;
    
        img {
            width:5rem;
            border-radius:50%;
        }

        div {
            display:flex;
            flex-direction:column;

            margin-left:1.2rem;

            span + span {
                color:${({ theme }) => theme.colors.gray_800 };
                margin-top:.4rem;
            }
        }
    }

    button {
        background:transparent;
    }
`;

export const Body = styled.main`
    margin-top:2rem;
    
    > span {
        font-weight:bold;
    }

    p {
        color:${({ theme }) => theme.colors.gray_800 };
        margin-top:.7rem;
        margin-bottom:2.8rem;

        height:3rem;
        text-overflow: ellipsis;
    }
`;

export const Footer = styled.footer`
    margin-top:2rem;
    
    display:flex;
    align-items:center;
    justify-content:space-between;

    button, a {
        height:3.4rem;
        border-radius:.4rem;

        display:flex;
        align-items:center;
        justify-content:center;
    }

    a {
        width:75%;
        gap:.8rem;

        font-weight:bold;
        font-size:.9rem;

        text-decoration:none;

        color:${({ theme }) => theme.colors.white };
        background-color:${({ theme }) => theme.colors.green };
    }

    button {
        width:20%;
        background-color:${({ theme }) => theme.colors.purple_500 };

        &.isLiked {
            background-color:${({ theme }) => theme.colors.red };
        }
    }
`;
