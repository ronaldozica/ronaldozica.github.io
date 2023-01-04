import './About.css';

export default function About() {
	return (
		<div className="About">
			<div>
				<p className="stroke shadow">Artes da Jackeline</p>
				<div className="stroke">
					Produtos artesanais personalizados!<br/> Escolha o produto que desejar e converse conosco para
					decidir a estampa que gostar mais.
				</div>
			</div>
			<div>
			<img src={require('../Images/logo.png')} alt="about" className="About-img" />
			</div>
		</div>
	)
}  