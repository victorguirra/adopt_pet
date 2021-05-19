import styled from 'styled-components';

export const Container = styled.div`
    width:100%;

    display:flex;
    align-items:center;
    justify-content:space-between;
    
    > div {
        display:flex;
        align-items:center;
    }

    .logo {
        gap:1rem;

        span {
            color:${({ theme }) => theme.colors.purple };
            font-weight:bold;
            font-size:1.3rem;
        }
    }

    > .rightsReserved {
        gap:.5rem; 

        > p {
            color:${({ theme }) => theme.colors.gray_800 };
        }
    }

    > .iconsContainer {
        gap:1.2rem;
    }
`;