import { API } from "@/constants";
import { extractJson } from "@/lib/extractJson";
import { getPrompt } from "@/lib/getPrompt";

export async function generateSynonyms(word: string) {
  const prompt = getPrompt(word);

  try {
    const data = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status}, msg: ${response.statusText}`
      );
    }

    const generatedContent = await response.json();
    const text = generatedContent.candidates[0].content.parts[0].text;

    console.log(JSON.parse(text));

    if (JSON.parse(text).types.length === 1) {
      return JSON.parse(text) as WordResponse;
    } else {
      return extractJson(text) as WordResponse;
    }
  } catch (error) {
    console.error("Error generating story:", error);
  }
}
