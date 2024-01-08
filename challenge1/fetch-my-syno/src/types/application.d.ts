type Sentences = string[];
type Types = "noun" | "verb" | "adjective";

interface WordDetail {
  definition: string;
  synonyms: string[];
  sentences: Sentences;
}

interface WordResponse {
  types: Types[];
  noun: WordDetail;
  verb: WordDetail;
  adjective: WordDetail;
}
