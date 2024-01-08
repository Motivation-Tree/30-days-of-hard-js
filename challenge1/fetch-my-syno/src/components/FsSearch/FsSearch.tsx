import { Button, Input } from "@nextui-org/react";

const FsSearch = () => {
  return (
    <form className="space-y-2 mb-12">
      <Input variant="bordered" size={"md"} type="text" label="Enter a word" />
      <div className="flex justify-center ">
        <Button color="primary" /* isLoading */ className="w-min">
          Find Synonyms...
        </Button>
      </div>
    </form>
  );
};

export default FsSearch;
