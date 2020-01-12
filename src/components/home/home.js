import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myPic from '../../assets/images/mynewpic.jpg';
import styled from 'styled-components';
import Coding from './coding';

const ImgStyle = styled.img`
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
`;

const InnerContainer = {
    backgroundImage: 'linear-gradient(to right, #D6EAEF 38%, #ffffff 1%)',
    width: '100%',
    height: 'inherit',
};

const LeftContainer = styled.div`
    width: 35%;
`;

const RightContainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    padding: 5% 0 0 10%;
`;

const OuterSection = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 1100px;
    margin: 0 auto;
`;

const TechCollection = styled.div`
    height: 250px;
    width: 70%;
    padding-right: 10%;
    overflow-y: scroll;
    margin: 5% auto 0;

    &::-webkit-scrollbar-track {
        background-color: #fffff;
    }

    &::-webkit-scrollbar {
        width: 6px;
        background-color: #fffff;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #EEEEEE;
    }
`;

const ProgessbarContainer = styled.div`
    margin-bottom: 28px;

    span {
        text-transform: uppercase;
        letter-spacing: 2px;
    }
`;

const ProgessbarOuter = styled.div`
    width: 100%;
    background-color: #D6EAEF;
    height: 7px;
    margin-top: 8px;
    border-radius: 13px;
`;

const ProgessbarInner = styled.div`
    background-color: #134e6f;
    height: 7px;
    border-radius: 13px 0 0 13px;
`;

function Home(props) {
    const detailsData = () => {
        const data = props.personalDetails;
        if(data && data.reducerDetailsData) {
            const info = data.reducerDetailsData.actionDetailsData.details;
            const tech = info.techDetails.map((item) => {
                return (
                    <ProgessbarContainer>
                        <span>{item.techName} - {item.percent*10}%</span>
                        <ProgessbarOuter>
                            <ProgessbarInner style={{width: item.percent*10 + '%'}}></ProgessbarInner>
                        </ProgessbarOuter>
                    </ProgessbarContainer>
                )
            });
            return (
                <OuterSection>
                    <LeftContainer>
                        <Coding codingData={info.codeDetails}></Coding>
                    </LeftContainer>
                    <RightContainer>
                        <section style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{width: '22%', height: 'fit-content'}}>
                                <ImgStyle alt="Kanchan Tyagi's Photo" src={myPic}></ImgStyle>
                            </div>
                            <div style={{width: '75%', height: 'fit-content', padding: '2% 0 0 3%'}}>
                                <h1>{info.name}</h1>
                                <h2>{info.role} / {info.qualification}</h2>
                            </div>
                        </section>
                        <section>
                            <p>{info.about}</p>
                        </section>
                        <TechCollection>
                            {tech}
                        </TechCollection>
                    </RightContainer>
                </OuterSection>
            )
        } else {
            return;
        }
    }

    return (
        <div id="home" style={InnerContainer}>{detailsData()}</div>
    )
}

Home.prototype = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
    jobStartYear: PropTypes.string.isRequired,
    jobStartMonth: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired
};

export default Home;