import React from 'react';
import {Button} from "../../../UI"
import lgScreen from "../../../assets/Dashboard (Wallet).png"
import walletDashboard from "../../../assets/Flux Wallet Dashboard – 2.png"
import Container from "./styles"


const HeaderBanner = () => {
    return (
        <Container>
            <div className = "col">
                <h1 className = "headline">International and local cash transfers, simplified.</h1>
                <p>With Flux, international and local cash transfers just got easier, faster, cheaper and better.</p>
                <div className = "btn-group">
                    <Button primary>Download Now</Button>
                    <Button secondary>Contact Us</Button>
                </div>
            </div>
            <div className = "col">
                <img className = "lg-wallet" src = {lgScreen} alt = {"flux desktop wallet dashboard"} />
                <img className = "sm-wallet" src = {walletDashboard} alt = {"flux  mobile wallet dashboard"} />
            </div>
            <hr />
        </Container>
    );
};

export default HeaderBanner;