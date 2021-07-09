import "./App.css";
import {useRef, useState} from 'react';

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const inputSenha = useRef();
  const inputUsuario = useRef();

function focaInput(){
  if(inputUsuario.current.value ===""){
    inputUsuario.current.focus();
    return;
  }
  if(inputSenha.current.value ===""){
    inputSenha.current.focus();
    return;
  }
  if(inputSenha.current.value ==="" && inputUsuario.current.value===""){
    inputUsuario.current.focus();
    return;
  }else{
    alert("Sucesso!!!");
  }
 //console.log(inputRef.current.value);
}
  return (
    <div>
      <h1>Login</h1>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <label>
          Usuário
          <input
            ref = {inputUsuario}
            value={usuario}
            onChange={(ev) => setUsuario(ev.target.value)}
          />
        </label>
        <label>
          Senha
          <input
            ref = {inputSenha}
            type="password"
            value={senha}
            onChange={(ev) => setSenha(ev.target.value)}
          />
        </label>
        <button onClick={focaInput}>Fazer login</button>
      </form>
    </div>
  );
}

export default App;
