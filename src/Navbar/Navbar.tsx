import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
	navClass: string;
	linkClassName: string;
}

const Navbar: React.FC<NavbarProps> = ({ navClass, linkClassName }) => {
	return (
		<NavComponent navClass={navClass} linkClassName={linkClassName} />
	)
};

interface NavComponentProps {
	navClass: string;
	linkClassName: string;
}

export const NavComponent: React.FC<NavComponentProps> = ({ navClass, linkClassName }) => {
	const sections = [
		{
			id: "/shop",
			name: "Loja"
		},
		{
			id: "/about",
			name: "Sobre"
		},
		{
			id: '/SignIn',
			name: "Login"
		},
		{
			id: "/frequentQuestions",
			name: "Perguntas"
		},
		{
			id: "/contacts",
			name: "Contato"
		}
	]
	return (
		<nav className={navClass}>
			{sections.map((section) => (
				<Link key={section.id} to={section.id} className={linkClassName}>
					<span>
						{section.name}
					</span>
				</Link>
			))}
		</nav >
	)
};

export default Navbar;
