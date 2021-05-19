import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    padding:4rem;
    
    main {
        height:100%;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        > img {
            width:16rem;
            height:16rem;

            object-fit:cover;
            border-radius:50%;
        }

        > p {
            font-size:1.8rem;
            font-weight:bold;
            
            margin-top:1.8rem;
        }

        > span {
            color:${({ theme }) => theme.colors.gray_800 };
            margin-top:.2rem;
        }

        > .medias {
            margin-top:1rem;

            display:flex;
            gap: 1rem;

            > p {
                color:${({ theme }) => theme.colors.gray_800 };

                display:flex;
                align-items:center;
                gap:.4rem;
            }
        }

        > footer {
            margin-top:3rem;

            display:flex;
            align-items:center;
            gap:1rem;

            > div {
                width:8rem;
                height:8rem;

                background-color:${({ theme }) => theme.colors.gray_300 };
                border-radius:.5rem;

                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;

                > span {
                    color:${({ theme }) => theme.colors.purple_500 };

                    font-weight:bold;
                    font-size:1.2rem;
                }

                > p {
                    color:${({ theme }) => theme.colors.gray_800 };
                    text-align:center;

                    margin-top:.8rem;
                }
            }
        }
    }
`;