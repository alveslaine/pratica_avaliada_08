import axios from "axios";
import { useContext, useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

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

  async function salvarCategoria(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (categoria.tipo.trim() === "") {
      alert("Informe o nome da categoria!");
      return;
    }

    setIsLoading(true);
    try {
      if (id === undefined) {
        await cadastrar("/categorias", categoria, setCategoria, { headers: { Authorization: token } });
        alert("Categoria cadastrada com sucesso!");
      } else {
        await atualizar("/categorias", categoria, setCategoria, { headers: { Authorization: token } });
        alert("Categoria atualizada com sucesso!");
      }
      navigate("/categorias");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        alert(`Erro ao salvar a categoria: ${error.response.status}`);
        handleLogout();
      } else {
        alert("Erro ao salvar a categoria!");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center px-2 pt-4 mx-auto">
      <h1 className="my-8 text-3xl text-center md:text-4xl">{id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}</h1>
      <form className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2" onSubmit={salvarCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo">Categoria</label>
          <input type="text" placeholder="Categoria" id="tipo" name="tipo" value={categoria.tipo} onChange={atualizarEstado} className="p-2 text-base bg-white border-2 rounded border-slate-700 utral-800 md:text-lg" required />
        </div>
        <button className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 bg-slate-400 hover:bg-slate-800 md:w-1/2 md:text-lg" type="submit">
          {isLoading ? <ClipLoader color="#ffffff" size={24} /> : <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
