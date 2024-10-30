import axios from "axios";

const apiKey = process.env.OPEN_AI_API;
const endpoint = "https://api.openai.com/v1/chat/completions";

export default async function getChatGPTResponse(prompt: string) {
  try {
    const response = await axios.post(
      endpoint,
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling the ChatGPT API:", error);
    return null;
  }
}
