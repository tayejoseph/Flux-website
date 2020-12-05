import React from 'react';
import {Button} from "../../../UI"
import Container from "./styles"


const Footer = () => {
    return (
        <Container>
            <p className = "semi-header">YOUR CASH, YOUR CONTROL</p>
            <h1 className = "title">We provide you with the options you deserve. We are unmatched, we make you Champion of your money.</h1>
            <div>
                <Button primary>Download Now</Button>
                <Button secondary>Contact Us</Button>
            </div>
            <ol className = "nav">
                <li>About Us</li>
                <li>Flux Store</li>
                <li>FAQs</li>
                <li>Contact Us</li>
            </ol>
            <div className = "row">
                <p className = "small--text">© 2020 Flux</p>
                <p className = "small--text">Terms & Conditions</p>
            </div>
        </Container>
    );
};

export default Footer;