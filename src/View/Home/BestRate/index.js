import React from 'react';
import {BiRightArrowAlt} from "react-icons/bi"
import Container from "./styles"
import walletDashboard from "../../../assets/Dashboard (Wallet) Buy Bitcoin.png"

const BestRate = () => {
    return (
        <Container>
        <div>
            <h3 className = "semi-header">BUYING</h3>
            <h1 className = "title">Buy at the best rates.</h1>
            <p>Buy BTC,USDT,ETH and LTC in seconds, we have the best rates in Africa.</p>
            <a href = "/" className = "link--arrow">See how <BiRightArrowAlt /></a>
        </div>
        <img src = {walletDashboard} alt = {"Wallet dashboard"} />
        </Container>
    );
};

export default BestRate;