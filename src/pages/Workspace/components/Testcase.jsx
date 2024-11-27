import React, { useState } from "react";

const Testcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testCase = [
    {
      input: "[1,2,2,2,]",
      output: "[2,3,]",
    },
    {
      input: "[1,2,asdfa2,2,]",
      output: "[2,3asdf,]",
    },
  ];
  return (
    <div className="w-full  bg-stone-800  rounded-lg  overflow-auto">
      <div className="w-full bg-stone-700 p-2">
        <h2 className="text-xs">Test case</h2>
      </div>
      <div className="flex gap-5 p-2 text-sm">
        {testCase.map(({}, index) => (
          <button
            className={`px-2 py-1 ${
              activeIndex == index && "bg-stone-700"
            } rounded-lg  `}
            onClick={() => setActiveIndex(index)}
          >
            Case {index + 1}
          </button>
        ))}
      </div>
      <div className="px-3">
        Input:
        <div className="bg-stone-700 p-2 px-3 mt-2 rounded-lg flex items-center">
          {testCase[activeIndex].input}
        </div>
      </div>
      <div className="px-3 mt-2">
        Output:
        <div className="bg-stone-700 p-2 px-3 mt-2 rounded-lg flex items-center">
          {testCase[activeIndex].output}
        </div>
      </div>
    </div>
  );
};

export default Testcase;
