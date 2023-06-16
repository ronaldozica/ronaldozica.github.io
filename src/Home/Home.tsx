import "./Home.css";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Products from "../Products/Products";
import About from "../About/About";
import Services from "../Services/Services";

function Home() {
	return (
		<>
			<div className="Background">
				<div className="NavbarHome">
					<Header />
				</div>

				<div className="IntroHome">
					<Intro />
				</div>

				<div>
					<Products />
				</div>

				<div className="AboutHome">
					<About />
				</div>

				<div>
					<Services />
				</div>
			</div>
		</>
	);
}

export default Home;
