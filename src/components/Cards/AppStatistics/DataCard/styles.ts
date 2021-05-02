import styled from 'styled-components';

interface IDataCardProps {
    color?: string;
}

export const Container = styled.div<IDataCardProps>`
    width:100%;
    //height:8rem;

    padding:1rem 2rem;

    background-color:${ props => props.color };
    border-radius:1rem;

    h3 {
        color:${({ theme }) => theme.colors.white };
        margin-bottom:1rem;
    }

    > article {
        display:flex;
        align-items:center;
        gap:3rem;

        div {
            width:4rem;
            height:4rem;

            border-radius:50%;
            border:2px solid ${({ theme }) => theme.colors.white };
        
            display:flex;
            align-items:center;
            justify-content:center;
        }

        section {
            p {
                display:flex;
                align-items:center;
                gap:1.4rem;

                color:${({ theme }) => theme.colors.white };
                font-size:.9rem;
                margin-bottom:1rem;
            }

            span {
                color:${({ theme }) => theme.colors.gray_300 };
                
            }
        }
    }
`;