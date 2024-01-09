import { initWordSearch } from "@/app/actions/initSearch";
import { Button, Input } from "@nextui-org/react";

const FsSearch: React.FC<FsSearchProps> = ({ word }) => {
  return (
    <form className="space-y-2 mb-12" action={initWordSearch}>
      <Input
        variant="bordered"
        size={"md"}
        type="text"
        label="Enter a word"
        name="word"
        defaultValue={word}
      />
      <div className="flex justify-center ">
        <Button color="primary" /* isLoading */ className="w-min" type="submit">
          Find Synonyms...
        </Button>
      </div>
    </form>
  );
};

export default FsSearch;
