import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import HeaderItems from '../HeaderItems/HeaderItems';

export default function Header() {
	const LOGO_URL = "https://cdn.discordapp.com/attachments/1056950292656169102/1056950361358876782/logo.png";
	return (
		<div className="Home">
        <div className="Home-header">
          <Link to="/">
            <img src={LOGO_URL} alt="logo" className="Home-logo"/>
            </Link>
        </div>

        <div className="Home-items">
            <HeaderItems/>
        </div>
      </div>
	)
}  