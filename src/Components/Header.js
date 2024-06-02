import "../index.css"
import { FaBell } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="body-container">
            <div className="logo-container">
                <h3>Company Logo</h3>
            </div>
            <div className="header-container">
                <nav>
                <ul>
                    <li>

                        <Link to="/">Home</Link>
                    </li>
                    <li>

                        <Link to="/about">About</Link>
                    </li>
                    <li>

                        <Link to="/service">Service</Link>
                    </li>
                    <li>

                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>

                        <Link to="/support">Support</Link>
                    </li>
                   
                    <div className="bell-container">
                        <FaBell className="bell-icon" />
                        <RxAvatar className="user-icon" />
                    </div>
                    <div id="menu">
                        <TiThMenu />
                        <IoClose />
                    </div>

                </ul>
                </nav>
            </div>

        </div>
    )
}

export default Header