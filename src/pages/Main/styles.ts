import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    padding:3rem;
    
    background-color:${({ theme }) => theme.colors.gray_300 };
`;