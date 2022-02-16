import React from 'react'

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#homepage"
            onClick={() => handlePageChange('Homepage')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
          >
            Homepage
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#login"
            onClick={() => handlePageChange('Login')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#food"
            onClick={() => handlePageChange('Food')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >
            Food
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#gear"
            onClick={() => handlePageChange('Gear')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Gear' ? 'nav-link active' : 'nav-link'}
          >
            Gear
          </a>
        </li>
       
        <li className="nav-item">
          <a
            href="#health"
            onClick={() => handlePageChange('Health')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Health' ? 'nav-link active' : 'nav-link'}
          >
            Health
          </a>
          </li>
          <li className="nav-item">
          <a
            href="#toys"
            onClick={() => handlePageChange('Toys')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Toys' ? 'nav-link active' : 'nav-link'}
          >
            Toys
          </a>
          </li>
          <li className="nav-item">
          <a
            href="#checkout"
            onClick={() => handlePageChange('Checkout')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Checkout' ? 'nav-link active' : 'nav-link'}
          >
            Checkout
          </a>
          </li>
      </ul>
    );
  }
  
  export default NavTabs;