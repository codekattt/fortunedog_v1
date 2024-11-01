import styled from "@emotion/styled";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background-color: #f5f5f7;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ContentsWrapper = styled.section`
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 60px 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  & h4 {
    margin-top: 20px;
    line-height: 1.6;
    font-weight: 400;
    color: #6e6e73;
  }

  @media (max-width: 768px) {
    padding: 50px 30px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;

    & h4 {
      font-size: 16px;
    }
  }
`;

export const InputWrapper = styled.section`
  width: 100%;
  margin-top: 40px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 200px;
  height: 48px;
  border: 1px solid #d2d2d7;
  border-radius: 12px;
  padding: 0 16px;
  margin: 8px 0;
  font-size: 16px;
  background-color: #f5f5f7;

  &:focus {
    outline: none;
    border-color: #007aff;
  }

  @media (max-width: 480px) {
    height: 44px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  height: 42px;
  padding: 0 40px;
  margin-top: 20px;
  border: none;
  border-radius: 24px;
  background-color: #007aff;
  color: #ffffff;
  font-size: clamp(11px, 3vw, 16px);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005bb5;
  }

  @media (max-width: 480px) {
    height: 44px;
    padding: 0 30px;
  }
`;

export const Response = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 40px 0;
  padding: 40px;
  line-height: 1.6;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    font-size: 14px;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 120px;
  height: 120px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    max-width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    max-width: 80px;
    height: 80px;
  }
`;

export const ImgText = styled.figcaption`
  margin-top: 8px;
  text-align: center;
  font-size: clamp(12px, 2vw, 16px);
`;

export const ImgWrapper = styled.figure`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 40px 0;
  width: 100%;
`;
