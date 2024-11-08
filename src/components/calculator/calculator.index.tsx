import React, { useState } from "react";
import * as S from "./calculator.styles";

export default function NetCarbCalculator() {
  const [totalCarbs, setTotalCarbs] = useState<number | string>(0);
  const [fiber, setFiber] = useState<number | string>(0);
  const [sugarAlcohol, setSugarAlcohol] = useState<number | string>(0);
  const [netCarbs, setNetCarbs] = useState<number>(0);

  const calculateNetCarbs = () => {
    const calculatedNetCarbs =
      (typeof totalCarbs === "number" ? totalCarbs : 0) -
      (typeof fiber === "number" ? fiber : 0) -
      (typeof sugarAlcohol === "number" ? sugarAlcohol : 0);
    setNetCarbs(calculatedNetCarbs);
  };

  const handleInputChange = (
    setState: React.Dispatch<React.SetStateAction<number | string>>,
    value: string
  ) => {
    setState(value === "" ? "" : Number(value));
  };

  const handleFocus = (
    setState: React.Dispatch<React.SetStateAction<number | string>>
  ) => {
    setState("");
  };

  return (
    <S.Wrapper>
      <header>
        <S.Heading>순탄수 계산기</S.Heading>
      </header>
      <S.InputGroup>
        <S.Label htmlFor="totalCarbs">총 탄수화물 (g)</S.Label>
        <S.Input
          type="number"
          id="totalCarbs"
          value={totalCarbs}
          onChange={(e) => handleInputChange(setTotalCarbs, e.target.value)}
          onFocus={() => handleFocus(setTotalCarbs)}
          placeholder="Enter value"
        />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="fiber">식이섬유 (g)</S.Label>
        <S.Input
          type="number"
          id="fiber"
          value={fiber}
          onChange={(e) => handleInputChange(setFiber, e.target.value)}
          onFocus={() => handleFocus(setFiber)}
          placeholder="Enter value"
        />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label htmlFor="sugarAlcohol">당 알코올 (g)</S.Label>
        <S.Input
          type="number"
          id="sugarAlcohol"
          value={sugarAlcohol}
          onChange={(e) => handleInputChange(setSugarAlcohol, e.target.value)}
          onFocus={() => handleFocus(setSugarAlcohol)}
          placeholder="Enter value"
        />
      </S.InputGroup>
      <S.ResultContainer>
        <S.ResultLabel>순탄수화물:</S.ResultLabel>
        <S.ResultValue>{netCarbs}g</S.ResultValue>
      </S.ResultContainer>
      <S.Button onClick={calculateNetCarbs}>계산하기</S.Button>
    </S.Wrapper>
  );
}
