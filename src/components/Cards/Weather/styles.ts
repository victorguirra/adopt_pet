import styled from 'styled-components';

export const Container = styled.div`
    width:33%;
    height:17rem;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;

    .row {
        height:48%;

        display:flex;
        align-items:center;
        justify-content:space-between;
    }
`;

export const Square = styled.div`
    width:45%;
    height:100%;

    border-radius:.8rem;
    position:relative;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    &:first-of-type {
        background-color:${({ theme }) => theme.colors.purple };
    }

    &:last-of-type {
        background-color:${({ theme }) => theme.colors.orange };
    }

    p {
        color:${({ theme }) => theme.colors.gray_300 };
        margin-bottom:.2rem;
    }

    > span.firstSquare {
        color:${({ theme }) => theme.colors.white };
        font-size:1.7rem;

        margin-top:.3rem;

        > small {
            color:${({ theme }) => theme.colors.gray_300 };
            font-size:1rem;

            margin-left:.5rem;
        }
    }

    > span.secondSquare {
        width:100%;
        padding:0 1rem;
        
        color:${({ theme }) => theme.colors.gray_300 };
        font-size:.9rem;
        
        margin-top:.8rem;

        display:flex;
        align-items:center;
        gap:.5rem;
    }

    > div {
        width:100%;
        padding:0 1rem;

        margin-top:.8rem;

        display:flex;
        align-items:center;
        gap:.3rem;

        span {
            display:flex;
            align-items:center;

            color:${({ theme }) => theme.colors.gray_300 };
            font-size:.9rem;
        }
    }
`;

export const Rectangle = styled.div`
    width:100%;
    height:45%;

    background-color:${({ theme }) => theme.colors.blue };
    border-radius:.8rem;

    display:flex;
    align-items:center;
    justify-content:center;

    > div {
        display:flex;
        align-items:flex-end;

        margin-right:.8rem;

        h3 {
            color:${({ theme }) => theme.colors.white };
            font-size:3rem;
        }

        span {
            color:${({ theme }) => theme.colors.white };
            font-size:1.5rem;

            margin-left:.2rem;
        }
    }
`;