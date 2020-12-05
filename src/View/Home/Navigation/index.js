import React from 'react';
import {Button} from "../../../UI"
import fluxLogo from "../../../assets/icon.png"
import {MdMenu} from "react-icons/md"
import Container from "./styles"

const Navigation = () => {
    return (
        <Container>
            <div className = "nav--desktop">
                <div className = "brandImage">
                    <img src = {fluxLogo} alt = "Flux logo" />
                </div>
                <ol>
                    <li>About Us</li>
                    <li>Flux Gift</li>
                    <li>Flux Store</li>
                    <li>FAQS</li>
                    <li>Contact Us</li>
                    <li><Button primary>Download Now</Button></li>
                </ol>
            </div>
            <div className = "nav--mobile">
                <div className = "brandImage">
                    <img src = {fluxLogo} alt = "Flux logo" />
                </div>
                <MdMenu />
            </div>
        </Container>
    );
};

export default Navigation;