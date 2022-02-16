import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Homepage from './pages/Homepage';
import Gear from './pages/Gear';
import Toys from './pages/Toys';
import Health from './pages/Health';
import Footer from './Footer';
import Food from './pages/Food';
import Login from './Login';
import Checkout from './pages/Checkout';

export default function StoreContainer() {
    const [currentPage, setCurrentPage] = useState('Homepage');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Homepage') {
            return <Homepage />;
        }
        if (currentPage === 'Gear') {
            return <Gear />;
        }
        if (currentPage === 'Food') {
            return <Food />;
        }
        if (currentPage === 'Health') {
            return <Health />;
        }
        if (currentPage === 'Login') {
            return <Login />;
        }
        if (currentPage === 'Checkout') {
            return <Checkout />


        }
        return <Toys />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>

            {/* We are passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage(currentPage)}
            <Footer></Footer>
        </div>

    );
} 
