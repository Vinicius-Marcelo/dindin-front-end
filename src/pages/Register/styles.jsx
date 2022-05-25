import styled from 'styled-components';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 13px;

        position: absolute;
        top: 41px;
        left: 100px;
    }

    .card_register{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 51.3rem;
        min-height: 60%;
        background: var(--white);
        padding: 61px 32px 57px 32px;

            h2{
                font-family: Rubik;
                font-weight: 500;
                font-size: 28px;
                line_height: 33.18px;
                color: var(--rebeccapurple);
                margin-bottom: 7.6rem;
            }

            span, .link{
                font-family: Lato;
                font-weight: 700;
                font-size: 14px;
                line-height: 16.8px;
                color: var(--rebeccapurple);

                    .link{
                        text-decoration: none;
                    }
            }
    }

    @media(max-width: 560px){
        .logo{
            left: 0;
            right: 0;   
        }

        .card_register{
            margin-top: 60px;
            padding: 2.0rem 0 3.0rem 0;
            width: 30.0rem;
        }
    }

    @media(max-width: 350px){
        .logo{
            top: 20px;
        }
        .card_register{
            padding: 1.5rem 0 2.0rem 0;
            width: 85%;

                h2{
                    margin-bottom: 2.0rem;
                }
        }
    }
`;