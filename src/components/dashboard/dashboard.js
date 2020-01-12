import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMyDetails, getProjectData } from './actions';
import styled from 'styled-components';

import Home from '../home/index';
import Blogs from '../blogs/index';
import Contact from '../contact/index';
import ProjectsList from '../projects/index';

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: row;
`;

const NavbarContainer = styled.div`
    background-color: #134e6f;
    width: 16%;
    height: 100%;
    position: fixed;

    ul {
        margin: 0;
        list-style: none;
        transform: translate(-50%, -50%);
        left: 5%;
        top: 35%;
        position: fixed;

        li {
            margin: 30px 0;
        }

        a {
            color: #9EAEB5;
            text-decoration: none;
            font-weight: normal;
            font-size: 18px;
            text-transform: uppercase;

            // &:before {
            //     content: "";
            //     position: absolute;
            //     width: 20px;
            //     margin-top: 15px;
            //     margin-left: -21px;
            //     height: 3px;
            //     background-color: #9EAEB5;
            // }
        }
    }
`;

const BodyContainer = styled.div`
    width: 84%;
    margin-left: 16%;
    height: 100%;
`;

function DashboardContainer(props) {
    const [details, setDetails] = useState([]);
    const [projectDataList, setProjectDataList] = useState([]);

    useEffect(() => {
        setDetails(props.getDetails());
    }, [details]);

    useEffect(() => {
        setProjectDataList(props.getProjectList());
    }, [projectDataList]);

    return (
        <MainContainer>
            <NavbarContainer>
                <ul>
                    <li>
                        <a href="#home" style={{color: 'white'}}>01 Home</a>
                    </li>
                    <li>
                        <a href="#project">02 Projects</a>
                    </li>
                    <li>
                        <a href="#blogs">03 Blogs</a>
                    </li>
                    <li>
                        <a href="#contact">04 Contact</a>
                    </li>
                </ul>
            </NavbarContainer>
            <BodyContainer>
                <Home personalDetails={props.personalDetails}></Home>
                {/* <About aboutDetail={props.personalDetails}></About> */}
                <ProjectsList projectsData={props.projectsData}></ProjectsList>
                <Blogs></Blogs>
                <Contact></Contact>
            </BodyContainer>
        </MainContainer>
    )

}

const mapStateToProps = state => {
    return {
        personalDetails: state.myDetails,
        projectsData: state.myProjectsDataList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getDetails: () => {
            dispatch(getMyDetails());
        },
        getProjectList: () => {
            dispatch(getProjectData());
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(DashboardContainer);