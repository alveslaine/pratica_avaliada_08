import { NumericFormat } from "react-number-format"

function FormProduto() {
	return (
		<div className="container flex flex-col items-center justify-center mx-auto my-4  md:h-[81vh] px-4 py-12">
			<h1 className="text-3xl md:text-4xl text-center mb-6">
				Cadastrar Produto
			</h1>

			<form className="w-full max-w-lg flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label htmlFor="nome" className="font-medium">
						Nome do Produto
					</label>
					<input
						type="text"
						placeholder="Insira aqui o nome do Produto"
						name="nome"
						id="nome"
						required
						className="border-2 border-slate-700 rounded p-2 bg-white text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="preco" className="font-medium">
						Preço (R$)
					</label>
					<NumericFormat
						id="preco"
						name="preco"
						thousandSeparator="."
						decimalSeparator=","
						decimalScale={2}
						fixedDecimalScale
						allowNegative={false}
						prefix="R$ "
						className="border-2 border-slate-700 rounded p-2 bg-white text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
						placeholder="R$ 0,00"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="foto" className="font-medium">
						Foto do Produto
					</label>
					<input
						type="text"
						placeholder="Adicione aqui a URL da foto do Produto"
						name="foto"
						id="foto"
						required
						className="border-2 border-slate-700 rounded p-2 bg-white text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="categoria" className="font-medium">
						Categoria do Produto
					</label>
					<select
						name="categoria"
						id="categoria"
						className="p-2 bg-white border-2 rounded border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
					>
						<option value="" disabled>
							Selecione uma Categoria
						</option>
						<option value="1">Ação</option>
						<option value="2">Aventura</option>
						<option value="3">Esporte</option>
					</select>
				</div>

				<button
					className="rounded text-slate-100 bg-slate-400 hover:bg-slate-800 
									w-full py-2 mt-2 flex justify-center items-center text-base transition-colors"
					type="submit"
				>
					<span>Cadastrar</span>
				</button>
			</form>
		</div>
	)
}

export default FormProduto
