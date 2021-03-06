import { useState } from 'react';
import * as L from './styles';
import Icon from '../../assets/icon.svg';
import Logo from '../../assets/logo.svg';
import InputsLogin from '../../components/Inputs/LoginPages';
import ButtonLogIn from '../../components/Buttons/LoginPage/logIn';
import ButtonRegister from '../../components/Buttons/LoginPage/register';

const defaultValuesForm = { email: ``, senha: `` };

function Home() {
  const [form, setForm] = useState(defaultValuesForm);
  return (
    <L.Container>
      <div className='logo'>
        <img src={Icon} alt='icon' />
        <img src={Logo} alt='logo' />
      </div>

      <div className='cards'>
        <div className='card_message'>
          <h1>Controle suas <span>finanças</span>, sem planilhas chatas.</h1>
          <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distáncia.</p>
          <ButtonRegister />
        </div>
        <div className='card_login'>
          <h2>Login</h2>
          <InputsLogin form={form} setForm={setForm} />
          <ButtonLogIn form={form} />
        </div>
      </div>
    </L.Container>
  );
}

export default Home;
