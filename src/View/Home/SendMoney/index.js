import React from 'react';
import Container from "./styles"
import dashBoard from "../../../assets/Dashboard (Wallet) – Crypto – Send (Flux ID).png"
import fluxBitCoin from "../../../assets/Send Bitcoin (BTC Address) – 1.png"
import {BiRightArrowAlt} from "react-icons/bi"

const ReceiveMoney = () => {
    return (
        <Container>
            <div className = "row">
                <div className = "col">
                    <h3 className = "semi-header">SENDING</h3>
                    <h1 className = "headline">Send money with ease.</h1>
                    <p>Instantly send money anywhere on flux using Bitcoin or USDT.</p>
                    <a href = "/" className = "link--arrow">See how <BiRightArrowAlt /></a>
                </div>
                <div className = "col">
                    <img src = {dashBoard} alt = "flux dashboard" />
                    <img src = {fluxBitCoin} alt = "flux bitcoin" />
                </div>
                </div>
        </Container>
    );
};

export default ReceiveMoney;