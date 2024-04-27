import React from 'react';
import Logo from '../img/images.jpg';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt=""/>
            <span>
                Realiser avec <b>React.js</b>.
            </span>
        </footer>
    );
};

export default Footer;