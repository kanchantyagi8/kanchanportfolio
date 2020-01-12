import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import projectImagesList from './projectimages';

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    margin-bottom: 5%;
`;

const ProjectInnerContainer = styled.div`
    width: 280px;
    border: 1px solid #EEEEEE;
    margin: 5% 3% 0 0;
    padding: 1%;
    height: fit-content;

    h3 {
        font-size: 0.9rem;
        line-height: 20px;
        font-weight: normal;
    }
`;

const langContainer = {
    backgroundColor: '#D6EAEF',
    padding: '0 5px',
    color: 'black',
    fontSize: '0.8rem',
    fontWeight: 'normal',
    marginRight: '10px',
    marginBottom: '10px'
};

function ProjectsList(props) {
    const projectList = () => {
        const data = props.projectsData;
        if(data && data.reducerProjectsData && data.reducerProjectsData.actionProjectList.projectDetails) {
            const projectInfo = data.reducerProjectsData.actionProjectList.projectDetails;
            return (
                projectInfo.map((project) => {
                    const languages = project.projectBreif.map((lang) => {
                        return (
                            <div style={langContainer}>{lang}</div>
                        )
                    });
                    return (
                        <ProjectInnerContainer>
                            <img style={{width: 'inherit', height: '208px'}} src={projectImagesList[project.projectName]} alt={project.projectName + ' Image'}/>
                            <h3>{project.projectHeading}</h3>
                            <div style={{display: 'flex', flexDirection: 'row', flexFlow: 'row wrap'}}>{languages}</div>
                        </ProjectInnerContainer>
                    )
                })
            )
        } else {
            return;
        }
    };

    return (
        <div id="project" className="container" style={{height: 'auto'}}>
            <h1 style={{marginTop: '3%'}}>Projects</h1>
            <ProjectContainer>{projectList()}</ProjectContainer>
        </div>
    )
}

export default ProjectsList;