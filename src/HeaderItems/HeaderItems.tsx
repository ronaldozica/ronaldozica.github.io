import { Link } from 'react-router-dom';
import './HeaderItems.css';

export default function HeaderItems() {
    return (
      <section>
			<ul className="Routers">
				<li>
					<Link to="/">
						<span className="AboutItem">
							Página inicial
						</span>
					</Link>
				</li>
				<li>
					<Link to="/about">
						<span className="AboutItem">
							Sobre
						</span>
					</Link>
				</li>
				<li>
					<Link to="/about">
						<span className="AboutItem">
							Perguntas frequentes
						</span>
					</Link>
				</li>
				<li>
					<Link to="/about">
						<span className="AboutItem">
							Entre em contato
						</span>
					</Link>
				</li>
				<li>
					<Link to="/about">
						<span className="AboutItem">
							Loja
						</span>
					</Link>
				</li>
			</ul>
		  </section>
    )
  }  