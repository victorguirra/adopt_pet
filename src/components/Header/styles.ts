import styled from 'styled-components';

export const Container = styled.header`
    height:3rem;

    display:flex;
    align-items:center;
    justify-content:space-between;

    div:first-of-type {
        display:flex;
        align-items:center;

        span {
            color:${({ theme }) => theme.colors.gray_500 };

            margin-left:1.5rem;
            margin-right:1.5rem;
        }

        h3:last-of-type {
            color:${({ theme }) => theme.colors.blue };
        }
    }

    div:last-of-type {
        display:flex;
        align-items:center;
        
        p {
            font-weight:bold;

            span {
                color:${({ theme }) => theme.colors.blue };
            }
        }

        img {
            width:2.5rem;
            height:2.5rem;
            object-fit:cover;
            margin-left:1rem;
        }
    }

`;