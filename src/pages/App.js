import logo from '../logo.svg';
import '../App.css';
import {InputTextLabel, InputPasswordLabel} from '../components/inputs'
import {ButtonConfirm} from '../components/buttons'

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <div className="h-full overflow-hidden relative">
          <img src='https://cdn.pixabay.com/photo/2019/02/21/18/36/city-4011922_960_720.jpg' className="w-full h-full object-cover"></img>
          <div className="absolute inset-0 -left-3/4 bg-gradient-to-l from-black via-transparent to-transparent"></div>
        </div>
      </div>
      <div className="w-1/2 bg-slate-400 sm:bg-black min-h-screen flex justify-center min-w-full sm:min-w-fit text-slate-200">
        <div className="rounded-xl bg-slate-900 p-8 my-auto">
          <span className="text-2xl font-bold">Acesse o sistema</span>
          <InputTextLabel label="E-mail" var="email" type="text" placeholder="Insira seu e-mail"></InputTextLabel>
          <InputPasswordLabel label="Senha" var="password" type="password" placeholder="Insira sua senha"></InputPasswordLabel>
          <ButtonConfirm>Entrar</ButtonConfirm>
        </div>
      </div>
    </div>
  );
}

export default App;
