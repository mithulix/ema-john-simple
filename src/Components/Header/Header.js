import React from 'react';
import logo from "../../images/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <div className="img">
                    <a href="/home"><img src={logo} alt=""/></a>
                </div>
                <nav>
                    <input className="search" type="search" placeholder="search products.."/>
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                    <a href="/shop">SHOP</a>
                    <a href="/review">ORDER REVIEW</a>
                    <a href="/manage">MANAGE INVENTORY</a>
                </nav>

            </div>
        </div>
    );
};

export default Header;