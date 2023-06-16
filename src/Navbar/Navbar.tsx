import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
	navClass: string;
	linkClassName: string;
}

const Navbar: React.FC<NavbarProps> = ({ navClass, linkClassName }) => (
	<NavComponent navClass={navClass} linkClassName={linkClassName} onClick={function (): void {
		console.log('click')
	}} />
);

interface NavComponentProps {
	onClick: () => void;
	navClass: string;
	linkClassName: string;
}

export const NavComponent: React.FC<NavComponentProps> = ({ onClick, navClass, linkClassName }) => {
	const sections = [
		{
			id: "artesdajackeline",
			name: "Página inicial"
		},
		{
			id: "store",
			name: "Loja"
		},
		{
			id: "about",
			name: "Sobre"
		}
	]
	return (
		<nav className={navClass}>
			{sections.map((section) => (
				<div id={section.id}>
					<Link to={`/${section.id}`} className={linkClassName} id={section.id}>
						{section.name}
					</Link>
				</div>
			))}
		</nav >
	)
};

export default Navbar;
