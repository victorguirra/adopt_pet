import styled from 'styled-components';

export const Container = styled.footer`
    max-width:100%;

    display:flex;
    flex-direction:column;
    align-items:center;

    main {
        width:100%;
        
        display:flex;
        align-items:center;
        justify-content:space-between;

        button {
            background-color:transparent;
        }

        img {
            width:12rem;
            height:9rem;

            border-radius:.8rem;
            object-fit:cover;
        }
    }

    footer {
        margin-top:1.2rem;

        display:flex;
        align-items:center;
        gap:.7rem;   
    }
`;

export const Dot = styled.div`
    width:.7rem;
    height:.7rem;

    border-radius:50%;
    background-color:${({ theme }) => theme.colors.gray_800 };

    &.isActive {
        background-color:${({ theme }) => theme.colors.blue };
    }
`;