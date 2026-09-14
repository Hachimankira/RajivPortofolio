import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 60px 0;
    gap: 16px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

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
        margin-top: 12px;
        font-size: 15px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.glassBorder};
    color: ${({ theme }) => theme.text_secondary};
    font-size: 14px;
    border-radius: 10px;
    font-weight: 500;
    margin: 24px 0px;
    overflow: hidden;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    ${({ active, theme }) =>
        active && `
        background: ${theme.primary};
        color: ${theme.white};
    `}
    &:hover {
        background: ${({ theme }) => theme.hover};
        color: ${({ theme }) => theme.text_primary};
    }
    @media (max-width: 768px) {
        padding: 8px 12px;
    }
`

export const Divider = styled.div`
    width: 1px;
    background: ${({ theme }) => theme.glassBorder};
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    padding: 0 20px;
`;
