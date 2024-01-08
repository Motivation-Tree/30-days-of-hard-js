export const extractJson = (text: string) => {
  const regex = /```json([\s\S]+?)```|```([\s\S]+?)```/;
  const match = text.match(regex);

  if (match && (match[1] || match[2])) {
    const jsonData = match[1] || match[2];
    try {
      return JSON.parse(jsonData);
    } catch (error: any) {
      console.error("Error parsing JSON:", error.message);
      return null;
    }
  } else {
    console.log("No JSON found");
    return JSON.parse(text);
  }
};
