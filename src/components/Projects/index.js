import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import Reveal from '../Reveal'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Reveal>
          <Title>Projects</Title>
        </Reveal>
        <Reveal delay={100}>
          <Desc>
          I've had the opportunity to work on a wide range of projects, mostly mobile applications. Here are some of the projects I've completed, as well as those I'm currently working on.
          </Desc>
        </Reveal>
        <Reveal delay={150}>
          <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === 'completed' ?
              <ToggleButton active value="completed" onClick={() => setToggle('completed')}>Completed Projects</ToggleButton>
              :
              <ToggleButton value="completed" onClick={() => setToggle('completed')}>Completed Projects</ToggleButton>
            }
            <Divider />
            {toggle === 'ongoing' ?
              <ToggleButton active value="ongoing" onClick={() => setToggle('ongoing')}>Ongoings Projects</ToggleButton>
              :
              <ToggleButton value="ongoing" onClick={() => setToggle('ongoing')}>Ongoing Projects</ToggleButton>
            }
          </ToggleButtonGroup>
        </Reveal>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project , index) => (
              <Reveal key={index} inline delay={index * 100}>
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              </Reveal>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project , index) => (
              <Reveal key={index} inline delay={index * 100}>
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              </Reveal>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects