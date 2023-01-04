import React from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';
import { Context } from '../App';

function SideMenu() {
    const context = React.useContext(Context);
    const isSideMenuOpen = context.sideMenuOpen.isSideMenuOpen;
    const setSideMenuOpen = context.sideMenuOpen.setSideMenuOpen;

    return (
        <div className="Home">
            <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
            <input type="checkbox" id="active" onClick={() => { setSideMenuOpen(!isSideMenuOpen) }}/>
            <label htmlFor="active" className="menu-btn"><span /></label>
            <label htmlFor="active" className="close" />
            <div className="wrapper">
                <ul>
                    <li>
                        <Link to="/">
                            <span>
                                Página inicial
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span >
                                Sobre
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span >
                                Perguntas frequentes
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span >
                                Entre em contato
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span >
                                Loja
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="title">
                    Fullscreen Overlay Navigation Bar</div>
                <p>
                    (Hamburger Menu-2)</p>
            </div>
        </div>
    )
}

export default SideMenu;