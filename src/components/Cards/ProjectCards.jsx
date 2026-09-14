import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
`

const Card = styled.div`
    width: 340px;
    background-color: ${({ theme }) => theme.glass};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    cursor: pointer;
    border-radius: 14px;
    border: 1px solid ${({ theme }) => theme.glassBorder};
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    isolation: isolate;
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform;
    &:hover {
        transform: translateY(-8px) translateZ(0);
        border-color: ${({ theme }) => theme.primary}40;
        box-shadow: 0 12px 40px rgba(124, 58, 237, 0.2);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    object-fit: cover;
    object-position: top;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.hover};
    padding: 3px 10px;
    border-radius: 6px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Description = styled.div`
    font-weight: 400;
    font-size: 13px;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    margin-top: 6px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.5;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
    border: 2px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({project, setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image[0]} alt={project.title}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img}/>
                ))}
            </Members>
        </Card>
    )
}

export default ProjectCards
