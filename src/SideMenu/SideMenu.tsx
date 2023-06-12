import React from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";
import { Context } from "../App";

function SideMenu() {
    const context = React.useContext(Context);
    const isSideMenuOpen = context.sideMenuOpen.isSideMenuOpen;
    const setSideMenuOpen = context.sideMenuOpen.setSideMenuOpen;

    return (
        <div className="Home">
            <link
                href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
                rel="stylesheet"
            />
            <input
                type="checkbox"
                id="active"
                onClick={() => {
                    setSideMenuOpen(!isSideMenuOpen);
                }}
            />
            <label
                htmlFor="active"
                className="menu-btn"
                style={{
                    zIndex: "20",
                }}
            >
                <span />
            </label>
            <label htmlFor="active" className="close" />
            <div
                className="wrapper"
                style={{
                    zIndex: "10",
                }}
            >
                <ul
                    style={{
                        padding: "20px",
                        minWidth: "32rem",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <li>
                        <StyledLink to="/">
                            <span>Página inicial</span>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/about">
                            <span>Sobre</span>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/about">
                            <span>Perguntas frequentes</span>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/about">
                            <span>Entre em contato</span>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/about">
                            <span>Loja</span>
                        </StyledLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function StyledLink({ to, children }: { to: string; children: any }) {
    return (
        <Link
            style={{
                minWidth: "18ch",
            }}
            to={to}
        >
            {children}
        </Link>
    );
}

export default SideMenu;
