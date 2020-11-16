import React,{ Component } from "react";
import SignInButton from './SignInButton';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return(
            <nav className="navbarItems">
                <h1 className="heading-navbar">Explore Your Space</h1>
                
                <ul>
                    <li className="nav-menu">
                        <SignInButton />
                    </li>
                </ul>
            </nav>
        )
    };
}


export default Navbar