import "./Home.css";
import Header from "../Header/Header";
import CarouselComponent from "../Carousel/Carousel";
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
					<CarouselComponent />
				</div>

				<div>
					<Services />
				</div>

				<div>
					<Products />
				</div>

				<div className="AboutHome">
					<About />
				</div>
			</div>
		</>
	);
}

export default Home;
