import './Header.css';
import { Link } from 'react-router-dom';
import HeaderItems from '../HeaderItems/HeaderItems';
import { RiShoppingCartLine, RiUser3Line } from 'react-icons/ri';

export default function Header() {
    return (
        <>
            <div className="Home">
                <div className="Home-header">
                    <Link to="/">
                        <img src={require('../Images/logo_sem_wpp.png')} alt="logo" className="Home-logo" />
                    </Link>
                </div>

                <div className="Home-items">
                    <HeaderItems />
                </div>

                <div className="CustomItems">
                    <div>
                        <Link to="/cart">
                            <RiShoppingCartLine className="CartIcon" size={100} style={{ position: "relative", color: "black", width: "30px" }} />
                        </Link>
                    </div>
                    <div>
                        <Link to="/signIn">
                            <RiUser3Line className="SignInIcon" size={100} style={{ position: "relative", color: "black", width: "30px" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}  