import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    padding:2rem 3rem;

    main {
        height:calc(100% - 3rem - 2rem);
        margin-top:2rem;
        
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:3rem;
    }
`;

export const Content = styled.div`
    width:85%;
    height:100%;
    
    padding:2rem;

    border-radius:1.3rem;
    background-color:${({ theme }) => theme.colors.gray_300 };

    .row {
        width:100%;

        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .row:not(:first-of-type){
        margin-top:3rem;
    }
`;

export const Aside = styled.aside`
    width:15%;
    height:100%;

    border-radius:1.3rem;
    background-color:${({ theme }) => theme.colors.orange };
`;