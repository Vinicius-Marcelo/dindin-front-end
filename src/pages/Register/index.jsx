import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icon from '../../assets/icon.svg';
import Logo from '../../assets/logo.svg';
import ButtonRegister from '../../components/Buttons/RegisterPages';
import InputsRegister from '../../components/Inputs/RegisterPages';
import * as R from './styles';

const defaultValuesForm = {
  nome: ``, email: ``, senha: ``, confirmeSenha: ``
};

function Home() {
  const [form, setForm] = useState(defaultValuesForm);
  return (
    <R.Container>
      <div className='logo'>
        <img src={Icon} alt='icon' />
        <img src={Logo} alt='logo' />
      </div>
      <div className='card_register'>
        <h2>Cadastre-se</h2>
        <InputsRegister form={form} setForm={setForm} />
        <ButtonRegister form={form} />
        <span>Já tem cadastro? <Link to='/' className='link'>Clique aqui</Link></span>
      </div>
    </R.Container>
  );
}

export default Home;
