import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
] as const;

const FsWordSynonyms: React.FC<FsWordSynonymsProps> = ({ synonyms }) => {
  return (
    <Card>
      <CardHeader>
        <h4 className="font-bold text-large">Word Synonyms</h4>
      </CardHeader>
      <CardBody className="flex flex-row flex-wrap gap-4">
        {synonyms.map((synonym, index) => (
          <Chip key={index} color={colors[index]}>
            {synonym}
          </Chip>
        ))}
      </CardBody>
    </Card>
  );
};

export default FsWordSynonyms;
