import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import Reveal from '../Reveal'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 60px 0;
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 16px;
    padding: 0 20px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 700;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    letter-spacing: -0.5px;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 17px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 30px;
    justify-content: center;
    align-items: stretch;
    isolation: isolate;
    contain: paint;
`

const Skill = styled.div`
    width: 500px;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.card};
    border: 0.1px solid ${({ theme }) => theme.primary};
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;
    overflow: hidden;
    isolation: isolate;
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform;
    @media (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }
    @media (max-width: 500px) {
        max-width: 330px;
        padding: 10px 36px;
    }
`

const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    text-align: center;
`

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`

const SkillItem = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    border: 1px solid ${({ theme }) => theme.glassBorder};
    border-radius: 10px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    contain: paint;
    isolation: isolate;
    backface-visibility: hidden;
    transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
    cursor: pointer;
    background: ${({ theme }) => theme.glass};
    &:hover {
        border-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary};
        background: ${({ theme }) => theme.hover};
        transform: translateY(-2px) translateZ(0);
    }
    @media (max-width: 768px) {
        font-size: 13px;
        padding: 8px 12px;
    }
    @media (max-width: 500px) {
        font-size: 13px;
        padding: 6px 10px;
    }
`

const SkillImage = styled.img`
    width: 22px;
    height: 22px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Reveal>
          <Title>Skills</Title>
        </Reveal>
        <Reveal delay={100}>
          <Desc>Here are some of my skills on which I have been working on for the past 2 years.</Desc>
        </Reveal>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Reveal key={index} inline delay={index * 150}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index) => (
                    <SkillItem key={index}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Reveal>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills