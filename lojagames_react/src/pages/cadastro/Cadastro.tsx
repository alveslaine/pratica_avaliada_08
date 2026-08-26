import axios from "axios";
import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ClipLoader } from "react-spinners";
import dayjs from "dayjs";

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    dataNascimento: '',
  })
  const [confirmarSenha, setConfirmarSenha] = useState<string>('')

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: SyntheticEvent<HTMLFormElement>){
    e.preventDefault();

    if (confirmarSenha !== usuario.senha || usuario.senha.length < 8){
      alert("Senhas não conferem e/ou não possuem pelo menos 8 caracteres");
      setUsuario({...usuario, senha: ''});
      setConfirmarSenha('');
      return;
    }

    if (dayjs().diff(dayjs(usuario.dataNascimento), 'year') < 18) {
      alert("O usuário deve ter 18 anos ou mais.");
      return;
    }

    setIsLoading(true);
    try{
      await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
      alert("Usuário cadastrado com sucesso!");
      navigate('/');
    }catch(error){
      if(axios.isAxiosError(error) && error.response){
        alert(`Erro ao cadastrar o usuário: ${error.response.status}`)
      }else{
        alert("Erro ao cadastrar o usuário! Verifique a conexão com a API!")
      }
    }finally{
      setIsLoading(false);
    }
  }

  function retornar(){
    navigate('/');
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center font-bold">
        <div className="bg-[url('https://ik.imagekit.io/vzr6ryejm/games/fundo_03.jpg?updatedAt=1714988179386')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"></div>
        <form className="flex justify-center items-center flex-col w-full max-w-md px-6 sm:px-8 py-10 lg:py-3 gap-3" onSubmit={cadastrarNovoUsuario}>
          <h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl text-center">Cadastrar</h2>

          <div className="flex flex-col w-full"><label htmlFor="nome">Nome</label><input type="text" id="nome" name="nome" placeholder="Nome" className="border-2 border-slate-700 rounded p-2 w-full" required value={usuario.nome} onChange={atualizarEstado}/></div>
          <div className="flex flex-col w-full"><label htmlFor="usuario">Usuario</label><input type="email" id="usuario" name="usuario" placeholder="Usuario" className="border-2 border-slate-700 rounded p-2 w-full" required value={usuario.usuario} onChange={atualizarEstado}/></div>
          <div className="flex flex-col w-full"><label htmlFor="foto">Foto (URL) <span className="text-slate-400 font-normal">opcional</span></label><input id="foto" name="foto" type="text" className="border-2 border-slate-700 rounded p-2 w-full" placeholder="https://..." value={usuario.foto} onChange={atualizarEstado}/></div>
          <div className="flex flex-col w-full"><label htmlFor="dataNascimento">Data de Nascimento</label><input type="date" id="dataNascimento" name="dataNascimento" className="border-2 border-slate-700 rounded p-2 w-full" required value={usuario.dataNascimento} onChange={atualizarEstado}/></div>
          <div className="flex flex-col w-full"><label htmlFor="senha">Senha</label><input type="password" id="senha" name="senha" placeholder="Senha" className="border-2 border-slate-700 rounded p-2 w-full" required value={usuario.senha} onChange={atualizarEstado}/></div>
          <div className="flex flex-col w-full"><label htmlFor="confirmarSenha">Confirmar Senha</label><input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar Senha" className="border-2 border-slate-700 rounded p-2 w-full" required value={confirmarSenha} onChange={handleConfirmarSenha}/></div>

          <div className="flex flex-col sm:flex-row justify-around w-full gap-3 sm:gap-8">
            <button type="button" className="rounded text-white bg-red-400 hover:bg-red-700 w-full sm:w-1/2 py-2" onClick={retornar}>Cancelar</button>
            <button type="submit" className="rounded text-white bg-teal-500 hover:bg-teal-700 w-full sm:w-1/2 py-2 flex justify-center">
              {isLoading ? <ClipLoader color="#ffffff" size={24}/> : <span>Cadastrar</span>}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro
