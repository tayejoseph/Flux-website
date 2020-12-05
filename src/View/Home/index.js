import React from 'react';
import HeaderBanner from './HeaderBanner';
import Navigation from './Navigation';
import ReceiveMoney from './ReceiveMoney';
import BestRate from "./BestRate"
import SendMoney from "./SendMoney"
import AlreadyHaveBTC from "./AlreadyHaveBTC"
import HowToTransact from './HowToTransact';
import Footer from './Footer';


const Home = () => {
    return (
        <div className = "home">
            <Navigation />
            <HeaderBanner />
            <ReceiveMoney />
            <SendMoney />
            <BestRate />
            <AlreadyHaveBTC />
            <HowToTransact />
            <Footer />
        </div>
    )
}

export default Home;