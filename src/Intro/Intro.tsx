import './Intro.css';
import Carousel from 'react-bootstrap/Carousel';

function Intro() {
	return (
		<div className='carousel'>
			<Carousel variant="dark">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={require('../Images/logo.png')}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={require('../Images/logo.png')}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={require('../Images/logo.png')}
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Intro;