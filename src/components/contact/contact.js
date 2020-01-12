import React from 'react';
import styled from 'styled-components';

const myImg = {
    marginTop: '20%',
    opacity: '0.1',
    marginLeft: '-30%',
};

function Contact(props) {
    return (
        <div className="container" id="contact">
            <h1 style={{marginTop: '3%'}}>Contact Me</h1>
            <p><a href="mailto:kanchan.tyagi8@gmail.com">kanchan.tyagi8@gmail.com</a></p>
        </div>
    )
}

export default Contact;