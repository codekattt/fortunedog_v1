import React, { useState } from "react";
import getChatGPTResponse from "@/src/api/openai";
import TypingEffect from "@/src/components/TypingEffetc";
import * as S from "./fortunedog.styles";

export default function FortuneDogPage() {
  const [response, setResponse] = useState("");
  const [selected, setSelected] = useState(false);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleYearInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const handleMonthInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  const handleDayInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(event.target.value);
  };

  const handleImageClick = async (prompt: string) => {
    if (!selected && !loading) {
      setLoading(true);
      const chatResponse = await getChatGPTResponse(prompt);
      setResponse(chatResponse || "No response from API");
      setSelected(true);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResponse("");
    setSelected(false);
    setLoading(false);
    setName("");
    setYear("");
    setMonth("");
    setDay("");
  };

  const isValidDate = (year: string, month: string, day: string) => {
    const yearNum = parseInt(year, 10);
    const monthNum = parseInt(month, 10);
    const dayNum = parseInt(day, 10);
    if (
      yearNum > 1900 &&
      yearNum <= new Date().getFullYear() &&
      monthNum >= 1 &&
      monthNum <= 12 &&
      dayNum >= 1 &&
      dayNum <= 31
    ) {
      return true;
    }
    return false;
  };

  const createPrompt = (tone: string) => {
    if (!isValidDate(year, month, day)) {
      alert("유효한 생년월일을 입력해주세요.");
      return;
    }
    return `내 이름은 ${name}이야. ${year}년 ${month}월 ${day}일 생이야. ${tone} 오늘의 운세를 알려줘. 다섯문장으로 간결하게 이모티콘도 쓰면서 말해줘`;
  };

  return (
    <S.Wrapper>
      <S.ContentsWrapper>
        <h1>운세 봐주는 댕댕이</h1>
        <h4>
          이름과 생일을 적고
          <br />
          운세를 봐주길 원하는 댕댕를 클릭하면,
          <br />
          댕댕이가 오늘의 운세를 봐줘요!
        </h4>
        <S.InputWrapper>
          <S.Input
            type="text"
            value={name}
            onChange={handleNameInput}
            placeholder="이름이 뭐야?"
          />
          <S.InputGroup>
            <S.Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={year}
              onChange={handleYearInput}
              placeholder="태어난 년도"
            />
            <S.Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={month}
              onChange={handleMonthInput}
              placeholder="태어난 월"
            />
            <S.Input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={day}
              onChange={handleDayInput}
              placeholder="태어난 일"
            />
          </S.InputGroup>
        </S.InputWrapper>
        <S.ImgWrapper>
          <div>
            <S.Img
              onClick={() => {
                const prompt = createPrompt("생기발랄한 말투로");
                if (prompt) handleImageClick(prompt);
              }}
              src="./img/dog1.png"
              style={{
                cursor: selected ? "default" : "pointer",
              }}
              alt="운세 1"
            />
            <div>활기찬 점박이</div>
          </div>
          <div>
            <S.Img
              onClick={() => {
                const prompt = createPrompt("화난 말투와 반말로");
                if (prompt) handleImageClick(prompt);
              }}
              src="./img/dog3.png"
              style={{
                cursor: selected ? "default" : "pointer",
              }}
              alt="운세 2"
            />
            <div>화난 치와와</div>
          </div>
          <div>
            <S.Img
              onClick={() => {
                const prompt = createPrompt("다정한 말투와 존댓말로");
                if (prompt) handleImageClick(prompt);
              }}
              src="./img/dog2.png"
              style={{
                cursor: selected ? "default" : "pointer",
              }}
              alt="운세 3"
            />
            <div>다정한 리트리버</div>
          </div>
        </S.ImgWrapper>

        <S.Response>
          {loading && <div>운세 알아보는 중..!</div>}
          {response && <TypingEffect text={response} />}
        </S.Response>
        {selected && <S.Button onClick={handleReset}>다시하기</S.Button>}
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
