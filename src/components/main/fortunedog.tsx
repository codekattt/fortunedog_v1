import React, { useState } from "react";
import dynamic from "next/dynamic";
import getChatGPTResponse from "@/src/api/openai";
import TypingEffect from "../TypingEffect";
import * as S from "./fortunedog.styles";

const DatePicker = dynamic(() => import("../DatePickerWrapper"), { ssr: false });
const StyledInput = S.Input.withComponent("input");

export default function FortuneDogPage() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [response, setResponse] = useState("");
  const [selected, setSelected] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
    setBirthDate(null);
  };

  const createPrompt = (tone: string) => {
    if (!birthDate) {
      alert("유효한 생년월일을 입력해주세요.");
      return;
    }

    const year = birthDate.getFullYear();
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();

    return `내 이름은 ${name}이야. ${year}년 ${month}월 ${day}일 생이야. ${tone} 오늘의 운세를 알려줘. 다섯문장으로 간결하게 이모티콘도 쓰면서 말해줘`;
  };

  return (
    <S.Wrapper>
      <S.ContentsWrapper>
        <h1>운세 봐주는 댕댕이</h1>
        <h4>
          이름과 생일을 적고
          <br />
          운세를 봐주길 원하는 댕댕이를 클릭하면,
          <br />
          댕댕이가 오늘의 운세를 봐줘요!
        </h4>
        <h4>이름</h4>
        <S.Input value={name} onChange={handleNameInput} placeholder="10자 이내로 입력하세요"/>
        
        <h4>생년월일</h4>
        {/* DatePicker를 동적 로드로 설정 */}
        <DatePicker
          selected={birthDate}
          onChange={setBirthDate}
          dateFormat="yyyy년 MM월 dd일"
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          maxDate={new Date()}
          placeholderText="생년월일을 선택하세요"
          customInput={<StyledInput />}
          locale="ko"
        />
        <S.ImgWrapper>
          <div>
            <S.Img
              onClick={() => {
                const prompt = createPrompt("생기발랄한 말투로");
                if (prompt) handleImageClick(prompt);
              }}
              src="./img/sigor.jpg"
              style={{
                cursor: selected ? "default" : "pointer",
              }}
              alt="운세 1"
            />
            <S.ImgText>점박이</S.ImgText>
          </div>
          <div>
            <S.Img
              onClick={() => {
                const prompt = createPrompt("화난 말투와 반말로");
                if (prompt) handleImageClick(prompt);
              }}
              src="./img/angry.jpg"
              style={{
                cursor: selected ? "default" : "pointer",
              }}
              alt="운세 2"
            />
            <S.ImgText>말티즈</S.ImgText>
          </div>
          <div>
            <S.Img
              onClick={() => {
                const prompt = createPrompt("다정한 말투와 존댓말로");
                if (prompt) handleImageClick(prompt);
              }}
              src="./img/golden.png"
              style={{
                cursor: selected ? "default" : "pointer",
              }}
              alt="운세 3"
            />
            <S.ImgText>리트리버</S.ImgText>
          </div>
        </S.ImgWrapper>

        <S.Response>
          {loading && <div>오늘의 운세 물어오는 중..!</div>}
          {response && <TypingEffect text={response} />}
        </S.Response>
        {selected && <S.ButtonWrapper><S.Button>공유하기</S.Button><S.Button onClick={handleReset}>다시하기</S.Button></S.ButtonWrapper>}
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
