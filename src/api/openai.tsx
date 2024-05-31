import axios from "axios";

const apiKey = process.env.OPEN_AI_API;
const endpoint = "https://api.openai.com/v1/chat/completions";

// async 키워드를 추가하여 함수를 비동기 함수로 만듭니다.
export default async function getChatGPTResponse(prompt: string) {
  try {
    const response = await axios.post(
      endpoint,
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    // 응답 데이터 구조에 맞게 접근합니다.
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling the ChatGPT API:", error);
    return null;
  }
}
