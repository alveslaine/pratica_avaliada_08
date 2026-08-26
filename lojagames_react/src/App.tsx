import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/carrinho/cart/Cart";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import ListarProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/Perfil";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
		<BrowserRouter>
				<AuthProvider>
						<Navbar />
						<div className="flex flex-col min-h-[70vh] bg-slate-200">
								<Routes>
										<Route path="/" element={<Login />} />
										<Route path="/cadastro" element={<Cadastro />} />

										<Route path="/home" element={<Home />} />
										<Route path="/categorias" element={<ListarCategorias />} />
										<Route path="/cadastrarcategoria" element={<FormCategoria />} />
										<Route path="/editarcategoria/:id" element={<FormCategoria />} />
										<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
										<Route path="/produtos" element={<ListarProdutos />} />
										<Route path="/cadastrarproduto" element={<FormProduto />} />
										<Route path="/editarproduto/:id" element={<FormProduto />} />
										<Route path="/deletarproduto/:id" element={<DeletarProduto />} />
										<Route path="/carrinho" element={<Cart />} />
										<Route path="/perfil" element={<Perfil />} />
								</Routes>
						</div>
						<Footer />
				</AuthProvider>
		</BrowserRouter>
    )
}

export default App
