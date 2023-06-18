import '../Home/Home.css';
import './AboutPage.css';
import Header from '../Header/Header';
import About from '../About/About';

export default function AboutPage() {
	return (
		<div className="Background">
			<div className="AboutHeader">
				<Header />
			</div>

			<div>
				<About />
			</div>

			<div className="Space" />
		</div>
	)
}  