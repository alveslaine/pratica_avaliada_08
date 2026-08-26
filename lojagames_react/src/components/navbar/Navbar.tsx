import { ListIcon, ShoppingCartIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import SearchForm from "./SearchForm"

function Navbar() {
	return (
		<>
			{/* Navbar fixa no topo, visível em todas as telas */}
			<div className="w-full flex justify-center py-4 text-white bg-slate-800 md:py-2">
				<div className="container flex items-center justify-between mx-6 mt-2 text-lg">
					{/* Logo da loja, sempre visível, redireciona para Home */}
					<Link to="/home">
						<img
							src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png"
							alt="Logo"
							className="w-50 md:w-60"
						/>
					</Link>

					{/* Barra de busca */}
					<div className="relative flex items-center justify-center w-2/5 text-black max-md:hidden">
						<SearchForm />
					</div>

					{/* Menu de navegação desktop/tablet */}
					<div className="items-center hidden gap-4 py-4 md:flex">
						<Link to="/produtos" className="hover:underline">
							Produtos
						</Link>
						<Link to="/categorias" className="hover:underline">
							Categorias
						</Link>
						<Link to="/cadastrarcategoria" className="hover:underline">
							Cadastrar Categoria
						</Link>
						<Link
							to="/perfil"
							aria-label="Minha conta"
							className="hover:opacity-80 transition-opacity"
						>
							<UserIcon size={32} weight="bold" />
						</Link>
						<Link
							to="/carrinho"
							aria-label="Carrinho de compras"
							className="relative flex items-center hover:opacity-80 transition-opacity"
						>
							<ShoppingCartIcon size={32} weight="bold" />
							<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
								0
							</span>
						</Link>
						<button
							aria-label="Sair"
							className="hover:opacity-80 transition-opacity cursor-pointer"
						>
							<SignOutIcon size={32} weight="bold" />
						</button>
					</div>

					{/* Botão hambúrguer (mobile) */}
					<button
						className="md:hidden text-white p-2"
						aria-label="Abrir menu"
					>
						<ListIcon size={28} />
					</button>
				</div>
			</div>

			{/* Menu mobile */}
			<div
				className="hidden md:hidden flex-col gap-3 w-full bg-slate-800 text-white px-6 py-4 border-t border-slate-700"
			>
				<div className="text-black">
					<SearchForm />
				</div>
				<Link
					to="/produtos"
					className="hover:underline"
				>
					Produtos
				</Link>
				<Link
					to="/categorias"
					className="hover:underline"
				>
					Categorias
				</Link>
				<Link
					to="/cadastrarcategoria"
					className="hover:underline"
				>
					Cadastrar Categoria
				</Link>
				<Link
					to="/perfil"
					className="flex items-center gap-2 hover:underline"
				>
					<UserIcon size={24} weight="bold" />
					Minha conta
				</Link>
				<Link
					to="/carrinho"
					className="flex items-center gap-2 hover:underline"
				>
					<span className="relative flex items-center">
						<ShoppingCartIcon size={24} weight="bold" />
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
							0
						</span>
					</span>
					Carrinho
				</Link>
				<button
					className="flex items-center gap-2 hover:underline text-left cursor-pointer"
				>
					<SignOutIcon size={24} weight="bold" />
					Sair
				</button>
			</div>
		</>
	)
}

export default Navbar
