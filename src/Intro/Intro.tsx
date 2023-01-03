import './Intro.css';

export default function Intro() {
	const IMAGE_URL = "https://www.revistadapapelaria.com.br/wp-content/uploads/2020/04/artesanato-scaled-1.jpg";
	return (
		<div className="container">
			<img src={IMAGE_URL} alt="Snow" className="Image"/>
			<div className="Centered">Confira nossa seleção de peças artesanais: Ateliê Artes da Jackeline</div>
		</div>
	);
}  