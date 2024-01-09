import axios from "axios";

const synonym = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
});

export const fetchSynonyms = async (word) => {
  try {
    const result = await synonym.get(`/${word}/synonyms`);
    return result?.data?.synonyms;
  } catch (error) {
    return error;
  }
};

export const fetchRandomWord = async () => {
  try {
    const result = await synonym.get(`?random=${true}`);

    return result?.data;
  } catch (error) {
    return error;
  }
};
