import './ServiceCard.css';

export interface ServiceCardType {
	image: string,
	title: string,
	subtitle: string
}

export default function ServiceCard({ image, title, subtitle }: ServiceCardType) {
	return (
		<div>
			<div className="center">
				<div className="property-card">
					<a href="/">
						<div className="property-image" style={{ backgroundImage: `url(${image})` }}>
							<div className="property-image-title">
								{/* Optional <h5>Card Title</h5> If you want it, turn on the CSS also. */}
							</div>
						</div></a>
					<div className="property-description">
						<h5> {title} </h5>
						<p> {subtitle} </p>
					</div>
				</div>
			</div>
		</div>
	)
}  