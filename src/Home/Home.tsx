import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Products from '../Products/Products';
import About from '../About/About';
import Services from '../Services/Services';

function Home() {
	// const [data, setData] = React.useState(null);

	// React.useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data.message));
	// }, []);

	return (
		<div className="Background">
			<div>
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
	);
}

export default Home;