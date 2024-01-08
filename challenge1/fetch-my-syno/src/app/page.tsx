import { FsSearch, FsSection, FsTitle } from "@/components";
import { fsEnv } from "@/lib/getEnv";
import { FsTabs } from "@/sections";
import { generateSynonyms } from "./actions/generateSynonyms";

type Props = {
  searchParams: {
    word: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const word = searchParams?.word || fsEnv.defaultWord;

  if (!word) return;
  const data = await generateSynonyms(word);

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 gap-y-3">
      {/* title */}
      <FsSection className="flex justify-center">
        <FsTitle />
      </FsSection>

      {/* input */}
      <FsSection>
        <FsSearch word={word} />
      </FsSection>

      {/* word info */}
      {(data as WordResponse)?.types.some(
        (t) => t === "noun" || t === "verb" || t === "adjective"
      ) ? (
        <FsTabs data={data as WordResponse} word={word} />
      ) : (
        <>Error generating synonyms</>
      )}
    </main>
  );
}
