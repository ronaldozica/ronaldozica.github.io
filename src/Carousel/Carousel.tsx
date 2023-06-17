import './Carousel.css';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % 3); // Change the number 3 to match the total number of carousel items
		}, 30000); // Change the time interval (in milliseconds) to 30 seconds or any desired value

		return () => {
			clearInterval(interval);
		};
	}, []);

	const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
		setIndex(selectedIndex);
	};

	return (
		<div className='carousel'>
			<Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item>
					<img
						className='carousel-image'
						src={require('../Images/social_network.jpg')}
						alt='First slide'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='carousel-image'
						src={require('../Images/social_network.jpg')}
						alt='Second slide'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='carousel-image'
						src={require('../Images/social_network.jpg')}
						alt='Third slide'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default CarouselComponent;
