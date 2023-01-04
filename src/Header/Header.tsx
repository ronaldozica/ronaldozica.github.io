import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import HeaderItems from '../HeaderItems/HeaderItems';

export default function Header() {
	return (
		<div className="Home">
			<div className="Home-header">
				<Link to="/">
					<img src={require('../Images/logo.png')} alt="logo" className="Home-logo" />
				</Link>
			</div>

			<div className="Home-items">
				<HeaderItems />
			</div>
		</div>
	)
}  