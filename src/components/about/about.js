import React from 'react';
import styled from 'styled-components';
import AboutImg from '../../assets/images/About-Me.png';

const myImg = {
    marginTop: '20%',
    opacity: '0.1',
    marginLeft: '-30%',
};

function About(props) {
    // const aboutMe = (props.aboutDetail && props.aboutDetail.reducerDetailsData) ?
    // props.aboutDetail.reducerDetailsData.actionDetailsData.details : "";

    // return (
    //     <div className="container" id="about" style={{flexDirection: 'row'}}>
    //         <div className="left-container">
    //             <img style={myImg} src={AboutImg} alt="About me picture"/>
    //         </div>
    //         <div className="right-container">
    //             <h1 style={{marginTop: '37%'}}>About Me</h1>
    //             <p>{aboutMe.aboutDetail}</p>
    //         </div>
    //     </div>
    // )
}

export default About;