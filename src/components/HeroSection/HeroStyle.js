import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.5;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  animation: fadeIn 0.8s ease-out;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  animation: slideInLeft 0.8s ease-out;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  animation: fadeInUp 0.8s ease-out 0.2s both;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  @media (max-width: 640px) {
    margin-bottom: 24px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 360px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.glassBorder};
  box-shadow: 0 0 60px rgba(124, 58, 237, 0.2);
  animation: float 6s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 320px;
    max-height: 320px;
  }

  @media (max-width: 640px) {
    max-width: 250px;
    max-height: 250px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 56px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.1;
  letter-spacing: -1px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 36px;
    line-height: 1.2;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
  margin-top: 8px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 12px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 520px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 100%;
    max-width: 280px;
    text-align: center;
    padding: 14px 32px;
    color: ${({ theme }) => theme.white};
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${({ theme }) => theme.gradient};
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(124, 58, 237, 0.5);
    }

    @media (max-width: 640px) {
        padding: 12px 24px;
        font-size: 15px;
    }
`;
