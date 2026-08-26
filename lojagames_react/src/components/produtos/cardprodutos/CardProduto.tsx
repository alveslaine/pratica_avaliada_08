import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function CardProduto() {
	return (
		<div className="flex flex-col justify-between overflow-hidden bg-white rounded-lg">
			<div className="flex items-end justify-end pt-2 pr-2">
				<Link to="/editarproduto">
					<PencilIcon
						size={24}
						className="mr-1 hover:fill-teal-800"
					/>
				</Link>

				<Link to="/deletarproduto">
					<TrashIcon
						size={24}
						className="mr-1 hover:fill-red-700"
					/>
				</Link>
			</div>

			<div className="py-4">
				<img
					src="https://ik.imagekit.io/vzr6ryejm/games/produto.png"
					className="mx-auto mt-1 h-44 max-w-75"
					alt="Nome do Produto"
				/>

				<div className="p-4">
					<p className="text-sm text-center uppercase">
						Nome do Produto
					</p>
					<h3 className="text-xl font-bold text-center uppercase">
						R$ 199,90
					</h3>
					<p className="text-sm italic text-center">
						Categoria: Ação
					</p>
				</div>
			</div>
			<div className="flex flex-wrap">
				<button
					className="flex items-center justify-center w-full py-2 text-white bg-teal-600 hover:bg-teal-900"
				>
					Comprar
				</button>
			</div>
		</div>
	)
}

export default CardProduto
