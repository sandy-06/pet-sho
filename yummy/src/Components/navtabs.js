import React from 'react'

function NavTabs({ currentPage, handlePageChange,}) {
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
            <p onclick={currentPage ='Login'}>Login</p>
          </li>
          <li><a href="Cart">Cart</a></li>
        </ul>
      </div>
    </nav>
  );

    

}

export default NavTabs;