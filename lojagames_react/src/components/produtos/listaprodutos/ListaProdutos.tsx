import CardProdutos from '../cardprodutos/CardProduto';

function ListaProdutos() {
	return (
		<>
			<div className="flex justify-center mt-6 md:mt-8">
				<div className="container flex flex-col m-2 md:my-0">
					<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 mb-4 md:mb-0 p-2 md:p-4">
						<CardProdutos />
					</div>
				</div>
			</div>
		</>
	)
}

export default ListaProdutos
