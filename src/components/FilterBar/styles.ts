import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    > div {
        display:flex;
        align-items:center;
        gap:2rem;

        > button {
            padding:.3rem 1rem;
            border-radius:.7rem;
            
            color:${({ theme }) => theme.colors.white };
            
            display:flex;
            align-items:center;
            gap:.7rem;

            &.notSelectedOption{
                background-color:${({ theme }) => theme.colors.gray_800 };
            }

            &.selectedOption{
                background-color:${({ theme }) => theme.colors.purple_500 };
            }
        }
    }

    > button {
        width:8rem;
        height:3rem;

        border-radius:.3rem;

        color:${({ theme }) => theme.colors.white };
        background-color:${({ theme }) => theme.colors.red };
    }
`;
