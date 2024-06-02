import React, { useState } from "react";
import "../index.css";
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="body-container">
            <div className="logo-container">
                <h3>Company Logo</h3>
            </div>
            <div className="header-container">
                <ul className={menuOpen ? "show" : ""}>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
                    </li>
                    <div className="bell-container">
                        <FaBell className="bell-icon" />
                        <RxAvatar className="user-icon" />
                    </div>
                </ul>
                <div id="menu" onClick={toggleMenu}>
                    {menuOpen ? <IoClose /> : <TiThMenu />}
                </div>
            </div>
        </div>
    );
}

export default Header;
