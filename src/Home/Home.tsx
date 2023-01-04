import React, { useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Products from '../Products/Products';
import About from '../About/About';
import Services from '../Services/Services';
import { Context } from '../App';
import FakeSuspense from '../Delayed/Delayed';

function Home() {
	const context = React.useContext(Context);
	const isSideMenuOpen = context.sideMenuOpen.isSideMenuOpen;

	useEffect(() => {
		console.log(isSideMenuOpen)
	});

	return (
		<>
			{
				isSideMenuOpen ?
					null
					:
					<>
						<FakeSuspense delay={1700}>
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
						</FakeSuspense></>
			}
		</>
	);
}

export default Home;