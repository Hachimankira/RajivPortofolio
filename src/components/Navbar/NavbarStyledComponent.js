import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background: ${({ theme }) => theme.navBg};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
    animation: navDrop 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 32px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 8px;
    :hover {
        color: ${({ theme }) => theme.text_primary};
        background: ${({ theme }) => theme.hover};
    }

    &.active {
        color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.hover};
    }
`;

export const GitHubButton = styled.a`
    border: 1px solid ${({ theme }) => theme.glassBorder};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
    background: ${({ theme }) => theme.glass};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    :hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
        border-color: ${({ theme }) => theme.primary};
        transform: translateY(-1px);
    }
    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    position: absolute;
    top: 72px;
    right: 0;
    width: 100%;
    padding: 20px 40px 28px;
    background: ${({ theme }) => theme.card};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10%)')};
    border-radius: 0 0 16px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.glassBorder};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

export const MobileMenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;
    width: 100%;
    height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    :hover {
        color: ${({ theme }) => theme.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const MobileMenuButton = styled.a`
    border: 1px solid ${({ theme }) => theme.glassBorder};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
    :hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`;

export const MobileLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    padding: 10px 16px;
    border-radius: 8px;
    :hover {
        color: ${({ theme }) => theme.text_primary};
        background: ${({ theme }) => theme.hover};
    }
`;

export const MobileNavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;

export const GradientText = styled.span`
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 700;
    font-size: 20px;
`;

export const Logo = styled.img`
    width: 100px;
    height: auto;
    margin: 0 16px;
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
    }
`;
