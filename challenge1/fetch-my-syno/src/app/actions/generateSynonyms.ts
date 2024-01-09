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

    const res = extractJson(text);

    return res as WordResponse;
  } catch (error) {
    console.error("Error generating synonyms:", error);
    return "Error generating synonyms";
  }
}
