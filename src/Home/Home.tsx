import "./Home.css";
import Header from "../Header/Header";
import CarouselComponent from "../Carousel/Carousel";
import Products from "../Products/Products";
import About from "../About/About";
import Services from "../Services/Services";
import SocialMidiaIcons from "../SocialMidia/SocialMidia";

function Home() {
	return (
		<>
			<div className="Background">
				<span className="NavbarHome">
					<Header />
				</span>

				<CarouselComponent />
				<Services />
				<Products />

				<span className="AboutHome">
					<About />
				</span>

				<SocialMidiaIcons />
			</div>
		</>
	);
}

export default Home;
