import { useState, useContext, useEffect, type ChangeEvent, type SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import type UsuarioLogin from "../../models/UsuarioLogin";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
	const navigate = useNavigate();
 
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
 
    // Consumir os estados e funções da context (AuthContext)
    // usando o hook useContext (Consumer)
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);
    useEffect(() => {
        if (usuario.token !== "") {
            navigate("/home");
        }
    }, [usuario])
 
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        })
    }
 
    function login(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }
  
	return (
		<>
			<div
				className="grid grid-cols-1 lg:grid-cols-2 
                    min-h-screen place-items-center font-bold "
			>
				<form
					className="flex justify-center items-center flex-col w-full max-w-sm px-6 sm:px-8 py-10 lg:py-3 gap-4"
					onSubmit={login}
				>
					<h2 className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl text-center">Entrar</h2>
					<div className="flex flex-col w-full">
						<label htmlFor="usuario">Usuário</label>
						<input
							type="email"
							id="usuario"
							name="usuario"
							placeholder="Usuario"
							required
							className="border-2 border-slate-700 rounded p-2 w-full"
							value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="senha">Senha</label>
						<input
							type="password"
							id="senha"
							name="senha"
							placeholder="Senha"
							required
							className="border-2 border-slate-700 rounded p-2 w-full"
							value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<button
						type="submit"
						className="rounded bg-slate-400 hover:bg-slate-800 flex justify-center
                                    text-white w-full sm:w-2/3 py-2"
					>{
                        isLoading ? (
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />
                        ) : (
                            <span>Entrar</span>
                        )
                    }
					</button>
					<hr className="border-slate-800 w-full" />

					<p className="text-center">
						Ainda não tem uma conta?{" "}
						<Link to="/cadastro" className="text-indigo-800 hover:underline">
							Cadastre-se
						</Link>
					</p>
				</form>
				<div
					className="bg-[url('https://i.imgur.com/2jDMgHn.jpg')] lg:block hidden bg-no-repeat 
                    w-full min-h-screen bg-cover bg-center"
				></div>
			</div>
		</>
	)
}

export default Login
