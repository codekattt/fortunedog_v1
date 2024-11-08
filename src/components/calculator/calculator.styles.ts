// components/netcarb.styles.ts
import styled from "@emotion/styled";

// 컨테이너 스타일
export const Wrapper = styled.section`
  min-width: 360px;
  margin: 50px auto;
  padding: 24px;
  border-radius: 12px;
  background-color: #f5f5f7;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
`;

// 헤딩 스타일
export const Heading = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`;

// 입력 그룹 스타일
export const InputGroup = styled.article`
  margin-bottom: 12px;
`;

// 레이블 스타일
export const Label = styled.label`
  font-size: 0.9em;
  color: #555;
  margin-bottom: 4px;
  display: block;
`;

// 입력 필드 스타일
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  font-family: inherit;
  outline: none;
  background-color: #fff;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007aff;
  }
`;

// 버튼 스타일
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 16px;

  &:hover {
    background-color: #005bb5;
  }

  &:active {
    background-color: #004a99;
  }
`;

// 결과 컨테이너 스타일
export const ResultContainer = styled.output`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #007aff;
  font-weight: bold;
  font-size: 1.2em;
  border: 1px solid #007aff;
`;

// 결과 레이블 스타일
export const ResultLabel = styled.span`
  font-weight: 600;
  font-size: 1em;
`;

// 결과 값 스타일
export const ResultValue = styled.span`
  font-size: 1.5em;
`;
