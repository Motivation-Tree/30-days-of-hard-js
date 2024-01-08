export const extractJson = (text: string) => {
  const regex = /```json([\s\S]+?)```/;
  const match = text.match(regex);

  if (match && match[1]) {
    try {
      const jsonData = JSON.parse(match[1]);
      return jsonData;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  } else {
    console.error("No JSON data found in the text");
    return null;
  }
};
