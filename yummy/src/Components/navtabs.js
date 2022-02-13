import React from 'react'

function Nav() {
    return (
        <nav className="uk-navbar-container" uk-navbar="true">

            <div className="uk-navbar-center">

                <ul className="uk-navbar-nav">
                    <a href="" className="uk-navbar-item uk-logo">Yummy</a>
                </ul>
            </div>

            <div className="uk-navbar-right">

                <ul className="uk-navbar-nav">
                    <li>
                        <a href="SignIn">Sign In</a>
                    </li>
                    <li><a href="Cart">Cart</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav