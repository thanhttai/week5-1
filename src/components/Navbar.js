import React from 'react';
import logo from "../img/logo.png";

function Navbar() {
    return (
        <header class="header">
            <div class="grid wide">
                <div class="header__container">
                    <img src={logo} alt="" class="logo" />
                    <div class="header_links">
                        <a href="#">Premium</a>
                        <a href="#">Support</a>
                        <a href="#">Download</a>
                        <span>|</span>
                        <a href="#">Sign up</a>
                        <a href="#">Log in</a>
                    </div>
                </div>

            </div>
        </header>
    )
}
export default Navbar;