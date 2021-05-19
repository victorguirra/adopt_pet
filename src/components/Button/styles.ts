import styled from 'styled-components';

export const Container = styled.button`
    height:4rem;
    border-radius:.5rem;

    font-size:1rem;

    color:${({ theme }) => theme.colors.white };
    background-color:${({ theme }) => theme.colors.purple_500 };

    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;
`;