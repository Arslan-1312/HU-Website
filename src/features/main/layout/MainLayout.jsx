import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * MainLayout Component
 * 
 * Provides the standard layout for the main website,
 * including the TopBar, Header, Navbar, and Footer.
 */
const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col font-roboto">
            <TopBar />
            <Header />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
