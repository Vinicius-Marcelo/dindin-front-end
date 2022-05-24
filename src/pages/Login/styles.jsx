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

    padding: 0 12.2rem 0 10.0rem;
    --white: #fff;
    --rebeccapurple: #7978d9;



        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 13px;

            position: absolute;
            top: 41px;
            left: 100px;
        }

        .cards{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 91px;

            font-family: Rubik;
            color: var(--white);

                .card_message{
                    width: 64.1rem;

                        h1{
                            font-weight: 700;
                            font-size: 52px;
                            line-height: 62px;
                            margin-bottom: 33px;
                        }
                        span{
                            color: var(--rebeccapurple);
                        }
                        p{
                            font-weight: 400;
                            font-size: 28px;
                            line-height: 33px;
                        }
                }

                .card_login{
                    width: 51.3rem;
                    height: 53.5rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    background: var(--white);

                        h2{
                            font-weight: 500;
                            font-size: 28px;
                            line-height: 33px;

                            margin-bottom: 82px;
                            color: var(--rebeccapurple);
                        }
                }
        }
`;