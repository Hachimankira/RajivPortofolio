import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: scroll;
    transition: all 0.5s ease;
`;

const Wrapper = styled.div`
    max-width: 800px;
    width: 100%;
    border-radius: 20px;
    margin: 50px 12px;
    height: min-content;
    background-color: ${({ theme }) => theme.bgLight};
    color: ${({ theme }) => theme.text_primary};
    padding: 24px;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid ${({ theme }) => theme.glassBorder};
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin: 12px 8px 0px;
    @media only screen and (max-width: 600px) {
        font-size: 22px;
        margin: 8px 6px 0px;
    }
`;

const Date = styled.div`
    font-size: 14px;
    margin: 4px 8px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Desc = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    margin: 10px 8px;
    line-height: 1.6;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 8px 6px;
    }
`;

const Image = styled.img`
    width: 50%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
`;

const ImageContainer = styled.div`
    display: flex;
    gap: 12px;
`;

const Label = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin: 10px 8px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    gap: 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    margin: 2px;
    padding: 4px 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.hover};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 8px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 15px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 13px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 16px 0px 8px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.white};
    padding: 12px 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.primary};
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    ${({ dull, theme }) => dull && `
        background: ${theme.glass};
        color: ${theme.text_secondary};
        border: 1px solid ${theme.glassBorder};
    `}
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
    }
    @media only screen and (max-width: 600px) {
        font-size: 13px;
    }
`;

const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "12px",
                            right: "16px",
                            cursor: "pointer",
                            color: 'inherit',
                            opacity: 0.6,
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <ImageContainer>
                        <Image src={project?.image[0]} alt="project" />
                        <Image src={project?.image[1]} alt="project" />
                    </ImageContainer>
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, i) => (
                            <Tag key={i}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member, i) => (
                                    <Member key={i}>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        <Button dull href={project?.github} target='new' disabled={!project?.github}>View Code</Button>
                        <Button href={project?.webapp} target='new' disabled={!project?.webapp}>View Live App</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default index
