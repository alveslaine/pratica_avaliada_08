import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function DeletarCategoria() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const { id } = useParams<{ id: string }>();

    async function buscarCategoriaPorId() {
        setIsLoading(true);
        try {
            await buscar(`/categorias/${id}`, setCategoria, { headers: { Authorization: token } });
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                alert(`Erro ao consultar a categoria: ${error.response.status}`);
                handleLogout();
            } else {
                alert("Erro ao consultar a categoria!");
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (id !== undefined && token !== "") {
            buscarCategoriaPorId();
        }
    }, [id, token]);

    async function deletarCategoria() {
        setIsLoading(true);
        try {
            await deletar(`/categorias/${id}`, { headers: { Authorization: token } });
            alert("Categoria deletada com sucesso!");
            navigate("/categorias");
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                alert(`Erro ao deletar a categoria: ${error.response.status}`);
                handleLogout();
            } else {
                alert("Erro ao deletar a categoria!");
            }
        } finally {
            setIsLoading(false);
        }
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className='container w-full max-w-md px-4 pt-4 mx-auto md:pt-6'>
            <h1 className='py-4 text-3xl text-center md:text-4xl'>Deletar Categoria</h1>
            <p className='mb-4 text-base font-semibold text-center md:text-lg'>Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='flex flex-col justify-between overflow-hidden border rounded-2xl'>
                <header className='px-4 py-2 text-lg font-bold text-white md:px-6 bg-slate-600 md:text-2xl'>Categoria</header>
                <p className='h-full p-4 text-xl bg-white md:p-8 md:text-3xl'>{categoria.tipo || "Carregando..."}</p>
                <div className="flex flex-row">
                    <button onClick={retornar} className='w-full py-2 text-base bg-red-400 text-slate-100 hover:bg-red-600 md:text-lg'>Não</button>
                    <button onClick={deletarCategoria} disabled={isLoading} className='flex items-center justify-center w-full text-base bg-teal-600 text-slate-100 hover:bg-teal-700 md:text-lg'>
                        {isLoading ? <ClipLoader color="#ffffff" size={24}/> : <span>Sim</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria
