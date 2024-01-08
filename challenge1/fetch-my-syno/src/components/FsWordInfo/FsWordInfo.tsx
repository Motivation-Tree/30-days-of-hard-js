import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const FsWordInfo: React.FC<FsWordInfoProps> = ({ word, type, definition }) => {
  return (
    <Card>
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{word}</p>
          <p className="text-small text-default-500">{type}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{definition}</p>
      </CardBody>
    </Card>
  );
};

export default FsWordInfo;
