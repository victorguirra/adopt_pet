import styled from 'styled-components';

export const Container = styled.div`
    border:2px solid ${({ theme }) => theme.colors.gray_500 };
    border-radius:.5rem;

    display:flex;
    align-items:center;
    justify-content:center;
    gap:2rem;

    > p {
        color:${({ theme }) => theme.colors.purple_500 };
    }

    > main {
        display:flex;
        flex-direction:column;
        align-items:center;

        > .imageWrapper {
            width:3.4rem;
            height:3.4rem;

            border-radius:.5rem;

            position:relative;

            img {
                width:100%;
                height:100%;

                border-radius:.5rem;
                object-fit:cover;
            }

            > button {
                width:1.2rem;
                height:1.2rem;

                border-radius:50%;
                background-color:${({ theme }) => theme.colors.red };

                position:absolute;
                top:-.5rem;
                right:-.5rem;

                display:flex;
                align-items:center;
                justify-content:center;
            }
        }

        footer {
            margin-top:.7rem;
            
            display:flex;
            align-items:center;
            gap:.4rem;

            span {
                color:${({ theme }) => theme.colors.purple_500 };
                font-weight:bold;
                font-size:.8rem;
            }
        }
    }
`;