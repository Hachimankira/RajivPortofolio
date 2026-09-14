import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
`;

const FooterWrapper = styled.footer`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
    font-weight: 700;
    font-size: 20px;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    color: transparent;
`;

const Nav = styled.nav`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 0.8rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 6px 12px;
    border-radius: 8px;
    &:hover {
        color: ${({ theme }) => theme.text_primary};
        background: ${({ theme }) => theme.hover};
    }
    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 0.5rem;
    gap: 8px;
`;

const SocialMediaIcon = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text_secondary};
    border: 1px solid ${({ theme }) => theme.glassBorder};
    border-radius: 10px;
    transition: all 0.3s ease;
    background: ${({ theme }) => theme.glass};
    &:hover {
        color: ${({ theme }) => theme.white};
        background: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.primary};
        transform: translateY(-2px);
    }
`;

const Copyright = styled.p`
    margin-top: 0.5rem;
    font-size: 13px;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
`;

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Rajiv Shrestha</Logo>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>
                    &copy; {currentYear} Rajiv Shrestha. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;
