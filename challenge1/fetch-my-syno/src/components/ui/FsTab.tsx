import { Tab } from "@nextui-org/react";

type Props = {
  key: string;
  title: string;
  children: React.ReactNode;
};

const FsTab: React.FC<Props> = ({ key, title, children }) => {
  return (
    <Tab key={key} title={title}>
      {children}
    </Tab>
  );
};

export default FsTab;
