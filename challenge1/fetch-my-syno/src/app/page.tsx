import {
  FsSearch,
  FsSection,
  FsSentenceList,
  FsTitle,
  FsWordInfo,
  FsWordSynonyms,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 gap-y-3">
      {/* title */}
      <FsSection className="flex justify-center">
        <FsTitle />
      </FsSection>

      {/* input */}
      <FsSection>
        <FsSearch />
      </FsSection>

      {/* word info */}
      <FsSection>
        <FsWordInfo />
      </FsSection>

      {/* Word synonyms */}
      <FsSection>
        <FsWordSynonyms />
      </FsSection>

      {/* Sentence list */}
      <FsSection>
        <FsSentenceList />
      </FsSection>
    </main>
  );
}
