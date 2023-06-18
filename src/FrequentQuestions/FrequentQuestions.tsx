import React from "react";
import Header from "../Header/Header";
import "./FrequentQuestions.css";

function FrequentQuestions() {
	return (
		<div>
			<div>
				<Header />
			</div>

			<div
				style={{
					display: "grid",
					placeContent: "center",
					color: "black",
					paddingTop: "70px"
				}}
			>
				<div
					style={{
						padding: "0 350px",
						display: "flex",
						flexDirection: "column",
						gap: "20px",
						textAlign: "justify"
					}}
				>
					<span style={{ fontWeight: "bold", fontSize: 'xx-large' }}>Perguntas frequentes</span>
					<div>
						<p
							style={{
								fontSize: "large",
							}}
						>
							Quais são os métodos de pagamento aceitos na loja? Resposta: Aceitamos
							várias formas de pagamento, incluindo cartões de crédito, transferência
							bancária e serviços de pagamento online, como PayPal.
						</p>

						<p
							style={{
								fontSize: "large",
							}}
						>
							Qual é o prazo de entrega dos produtos? Resposta: O prazo de entrega
							pode variar de acordo com a localização e o método de envio selecionado.
							Geralmente, levamos de 3 a 7 dias úteis para processar o pedido e, em
							seguida, o prazo de entrega varia de acordo com a transportadora
							escolhida.
						</p>

						<p
							style={{
								fontSize: "large",
							}}
						>
							Posso devolver um produto se não estiver satisfeito? Qual é a política
							de devolução? Resposta: Sim, aceitamos devoluções dentro de um
							determinado período de tempo após o recebimento do produto. Nossa
							política de devolução permite que você devolva os produtos em sua
							embalagem original e em condições adequadas. É importante ler nossa
							política completa de devolução antes de enviar o produto de volta.
						</p>

						<p
							style={{
								fontSize: "large",
							}}
						>
							Vocês aceitam pedidos de atacado? Resposta: Sim, aceitamos pedidos de
							atacado. Se você estiver interessado em fazer uma compra em grande
							quantidade, entre em contato conosco através do nosso formulário de
							contato ou do endereço de e-mail fornecido em nosso site. Teremos prazer
							em fornecer informações adicionais e discutir as opções disponíveis.
						</p>

						<p
							style={{
								fontSize: "large",
							}}
						>
							Os produtos são embalados de forma segura para o envio? Resposta: Sim,
							embalamos cuidadosamente todos os produtos para garantir que cheguem em
							perfeitas condições. Utilizamos materiais de embalagem de alta qualidade
							e métodos adequados para proteger os itens durante o transporte. Caso
							ocorra algum dano durante o envio, entre em contato conosco
							imediatamente para que possamos resolver a situação.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FrequentQuestions;