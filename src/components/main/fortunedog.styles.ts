import styled from "@emotion/styled";

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
`;

export const ContentsWrapper = styled.div`
  height: 800px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 10px;
  margin: 10px;

  & h4 {
    margin-top: 10px;
    line-height: 1.5;
    font-weight: 400;
    color: #9c9c9c;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 120px;
  height: 42px;
  border-radius: 5px;
  padding: 4px 14px;
  margin: 10px 4px;

  @media (max-width: 480px) {
    width: 100px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: white;

  :hover {
    background-color: lightblue;
    color: white;
    border: none;
  }
`;

export const Response = styled.div`
  width: 400px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  line-height: 1.5;
  text-align: left;
  background-color: lightblue;
  border-radius: 10px;

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`;

export const ImgWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 380px;

  & div > div {
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;
