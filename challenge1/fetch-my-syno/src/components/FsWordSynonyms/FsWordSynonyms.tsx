import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

const FsWordSynonyms = () => {
  return (
    <Card>
      <CardHeader>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="flex flex-row flex-wrap gap-4">
        <Chip color="default">Default</Chip>
        <Chip color="primary">Primary</Chip>
        <Chip color="secondary">Secondary</Chip>
        <Chip color="success">Success</Chip>
        <Chip color="warning">Warning</Chip>
        <Chip color="danger">Danger</Chip>
      </CardBody>
    </Card>
  );
};

export default FsWordSynonyms;
