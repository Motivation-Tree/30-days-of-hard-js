"use client";

import {
  FsSection,
  FsSentenceList,
  FsWordInfo,
  FsWordSynonyms,
} from "@/components";
import { Tab, Tabs } from "@nextui-org/react";

const FsTabs: React.FC<FsTabs> = ({ data, word }) => {
  return (
    <Tabs aria-label="Options">
      {data?.types?.map((type) => (
        <Tab key={type} title={type}>
          <div className="space-y-3">
            <FsSection>
              <FsWordInfo
                word={word}
                type={type}
                definition={data[type].definition}
              />
            </FsSection>
            {/* Word synonyms */}
            <FsSection>
              <FsWordSynonyms synonyms={data[type].synonyms} />
            </FsSection>
            {/* Sentence list */}
            <FsSection>
              <FsSentenceList examples={data[type].sentences} />
            </FsSection>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default FsTabs;
