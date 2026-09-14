import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import Reveal from '../Reveal';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 60px 0px;
    @media (max-width: 960px) {
        padding: 40px 0px;
    }
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0px 0px 80px 0px;
    gap: 16px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`

const Title = styled.div`
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

const Desc = styled.div`
    font-size: 17px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 15px;
    }
`;

const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.glass};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 36px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.glassBorder};
    margin-top: 32px;
    gap: 14px;
`

const ContactTitle = styled.div`
    font-size: 22px;
    margin-bottom: 6px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
    flex: 1;
    background-color: ${({ theme }) => theme.glass};
    border: 1px solid ${({ theme }) => theme.glassBorder};
    outline: none;
    font-size: 15px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 10px;
    padding: 14px 18px;
    transition: all 0.3s ease;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
    }
    &::placeholder {
        color: ${({ theme }) => theme.text_secondary};
    }
`

const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: ${({ theme }) => theme.glass};
    border: 1px solid ${({ theme }) => theme.glassBorder};
    outline: none;
    font-size: 15px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 10px;
    padding: 14px 18px;
    font-family: inherit;
    resize: vertical;
    transition: all 0.3s ease;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
    }
    &::placeholder {
        color: ${({ theme }) => theme.text_secondary};
    }
`

const ContactButton = styled.input`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: ${({ theme }) => theme.gradient};
    padding: 14px 16px;
    margin-top: 4px;
    border-radius: 10px;
    border: none;
    color: ${({ theme }) => theme.white};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(124, 58, 237, 0.4);
    }
`

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2ibehng', 'template_k8ftm5v', form.current, 'oDP5vLq-powoTctDM')
            .then((result) => {
                setOpen(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Container id="contact">
            <Wrapper>
                <Reveal>
                    <Title>Contact</Title>
                </Reveal>
                <Reveal delay={100}>
                    <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
                </Reveal>
                <Reveal delay={200}>
                    <ContactForm ref={form} onSubmit={handleSubmit}>
                        <ContactTitle>Email Me</ContactTitle>
                        <ContactInput placeholder="Your Email" name="from_email" />
                        <ContactInput placeholder="Your Name" name="from_name" />
                        <ContactInput placeholder="Subject" name="subject" />
                        <ContactInputMessage placeholder="Message" rows="4" name="message" />
                        <ContactButton type="submit" value="Send" />
                    </ContactForm>
                </Reveal>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Email sent successfully!"
                    severity="success"
                />
            </Wrapper>
        </Container>
    )
}

export default Contact
