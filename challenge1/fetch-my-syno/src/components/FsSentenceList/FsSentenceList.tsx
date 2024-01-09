import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const FsSentenceList: React.FC<FsSentenceListProps> = ({ examples }) => {
  return (
    <Card>
      <CardHeader>
        <h4 className="font-bold text-large">Examples</h4>
      </CardHeader>

      {examples.map((example, index) => (
        <>
          <CardBody key={index}>
            <p>{example}</p>
          </CardBody>

          {examples.length - 1 !== index ? <Divider /> : null}
        </>
      ))}
    </Card>
  );
};

export default FsSentenceList;
