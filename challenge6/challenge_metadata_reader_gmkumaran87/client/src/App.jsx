import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [apiResponse, setApiResponse] = useState({
    isLoading: false,
    isError: false,
    data: {},
  });
  const getMetaData = async () => {
    try {
      setApiResponse((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch(`http://localhost:5000/api/meta-data`, {
        method: "POSt",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const result = await response.json();
      console.log(result);
      setApiResponse((prev) => ({ ...prev, data: result }));
    } catch (error) {
      console.log(error);
    } finally {
      setApiResponse((prev) => ({ ...prev, isLoading: false }));
    }
  };
  console.log("Api response", apiResponse);
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <h1 className="text-center text-3xl">MetaData Reader</h1>

      <div className="flex items-center justify-center gap-4 w-full mt-4">
        <input
          type="text"
          className="p-1.5 border border-gray-200 rounded-md min-w-[400px] focus:border-none active:border-none focus:ring-0"
          placeholder="Please enter Url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="py-1.5 px-3 border-none text-xl text-white bg-purple-500"
          onClick={getMetaData}
        >
          Fetch Details
        </button>
      </div>
      {Object.keys(apiResponse?.data).length > 0 ? (
        <div className="mt-6 w-full flex flex-col items-start px-6">
          {" "}
          {apiResponse?.isLoading ? (
            <p>Loading please wait..</p>
          ) : (
            <div className="">
              <p className="text-xl font-medium">
                User Title:{" "}
                <span className="text-sm font-normal">
                  {apiResponse.data.title}
                </span>
              </p>
              <p>
                Author: <span>{apiResponse.data.author}</span>
              </p>
              <p className="flex items-center gap-4">
                Image:{" "}
                <img height={50} width={70} src={apiResponse.data.image} />
                <img height={50} width={70} src={apiResponse.data.icon} />
              </p>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
