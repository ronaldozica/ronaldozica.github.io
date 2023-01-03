import './About.css';

export default function About() {
	const LOGO_URL = "https://cdn.discordapp.com/attachments/1056950292656169102/1056950361358876782/logo.png";
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
				<img src={LOGO_URL} alt="logo" className="About-img" />
			</div>
		</div>
	)
}  