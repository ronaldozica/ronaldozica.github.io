import React, { useState } from 'react';
import { NavComponent } from '../Navbar/Navbar';

interface SmallScreensNavbarProps {
	navClass: string;
	linkClassName: string;
}

const SmallScreensNavbar: React.FC<SmallScreensNavbarProps> = ({ navClass, linkClassName }) => {
	// declare 'translate' as a state variable
	const [translate, setTranslate] = useState(true);

	return (
		<div>
			<button className="hamburger-btn" onClick={() => setTranslate(!translate)}>
				{/* toggle translate */}
				{/* change the btn text based on whether translate is true or false */}
				{translate ? <span>&#9776;</span> : <span>&times;</span>}
			</button>
			{/* hide and show the sidebar list based on whether translate is true or false */}
			<div id="sidebar-list" className={`${translate ? 'addTransiton' : 'removeTransition'}`}>
				<NavComponent navClass={navClass} linkClassName={linkClassName} onClick={() => setTranslate(true)} />
			</div>
		</div>
	);
};

export default SmallScreensNavbar;
