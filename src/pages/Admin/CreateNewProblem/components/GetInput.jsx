import React from "react";

const GetInput = ({ inputDataTypes, testCases, setTestCases, index }) => {
  const getNumber = () => {
    return (
      <input
        type="text"
        placeholder="Number here"
        className="w-full p-1 bg-stone-700 rounded-md"
      />
    );
  };

  const getString = () => {
    return (
      <input
        type="text"
        placeholder="Enter stringhere"
        className="w-full p-1 bg-stone-700 rounded-md"
        onChange={(e) =>
          setTestCases((prev) => {
            prev[index];
          })
        }
      />
    );
  };
  const getBoolean = () => {
    return (
      <select className="w-full p-1 bg-stone-700 rounded-md">
        <option>true</option>
        <option>false</option>
      </select>
    );
  };
  const get1dArray = () => {
    return <>string</>;
  };
  const get2dArray = () => {
    return <>string</>;
  };

  return (
    <div>
      {inputDataTypes.map(({ dataType, is2dArray, isArray }) => {
        if (isArray) return get1dArray(dataType);
        if (is2dArray) return get2dArray(dataType);

        if (dataType == "number") return getNumber();
        if (dataType == "boolean") return getBoolean();
        if (dataType == "string") return getString();
        if (dataType == "string") return getString();
      })}
    </div>
  );
};

export default GetInput;
