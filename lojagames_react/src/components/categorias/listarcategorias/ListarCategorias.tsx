import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import CardCategorias from "../cardcategorias/CardCategorias";
import type Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";

function ListarCategorias() {
		const [categorias, setCategorias] = useState<Categoria[]>([]);
		const [isLoading, setIsLoading] = useState<boolean>(false);
		const { usuario, handleLogout } = useContext(AuthContext);
		const token = usuario.token;

		async function buscarCategorias() {
				setIsLoading(true);
				try {
						await buscar("/categorias", setCategorias, {
								headers: { Authorization: token }
						});
				} catch (error) {
						if (axios.isAxiosError(error) && error.response?.status === 401) {
								alert(`Erro ao consultar as categorias: ${error.response.status}`);
								handleLogout();
						} else {
								alert("Erro ao consultar as categorias!");
						}
				} finally {
						setIsLoading(false);
				}
		}

		useEffect(() => {
				if (token !== "") {
						buscarCategorias();
				}
		}, [token]);

		return (
				<>
						<div className="flex justify-center w-full overflow-x-hidden">
								<div className="box-border w-full px-4 py-4 mt-8 mb-4 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">
										{isLoading ? (
												<div className="flex justify-center py-10"><ClipLoader size={50}/></div>
										) : (
												<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-4 md:mb-0">
														{categorias.map((categoria) => (
																<CardCategorias key={categoria.id} categoria={categoria} />
														))}
												</div>
										)}
								</div>
						</div>
				</>
		)
}

export default ListarCategorias;

