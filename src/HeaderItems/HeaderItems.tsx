import { Link } from 'react-router-dom';
import "./HeaderItems.css";

const HeaderItems = () => {
    return (
        <section className="HeaderItems">
            <div className="MenuBox">
                <ul className="Routers">
                    <li className="RouterItem">
                        <Link to="/">
                            <span className="MenuItem">Página inicial</span>
                        </Link>
                    </li>
                    <li className="RouterItem">
                        <Link to="/about">
                            <span className="MenuItem">Sobre</span>
                        </Link>
                    </li>
                    <li className="RouterItem">
                        <Link to="/frequentQuestions">
                            <span className="MenuItem">Perguntas frequentes</span>
                        </Link>
                    </li>
                    <li className="RouterItem">
                        <Link to="/contacts">
                            <span className="MenuItem">Entre em contato</span>
                        </Link>
                    </li>
                    <li className="RouterItem">
                        <Link to="/shop">
                            <span className="MenuItem">Loja</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section >
    );
}

export default HeaderItems;
