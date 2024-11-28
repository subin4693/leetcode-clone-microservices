import React, { useState } from "react";

const CreateNewProblem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [examples, setExamples] = useState([]);
  const [constraints, setConstraints] = useState([]);
  const [testCases, setTestCases] = useState([]);
  const [tempConstraint, setTempConstraint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      description,
      difficulty,
      examples,
      constraints,
      testCases,
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-stone-800  shadow-md rounded-md w-full max-w-2xl"
      >
        <h1 className="text-2xl font-semibold text-center">
          Create New Problem
        </h1>

        <div>
          <label className="block font-medium">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-stone-900"
            placeholder="Enter the title"
          />
        </div>

        <div>
          <label className="block font-medium">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400  bg-stone-900"
            placeholder="Enter the problem description"
          />
        </div>

        <div>
          <label className="block font-medium">Difficulty:</label>
          <select
            className="w-full border border-gray-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ornage-400  bg-stone-900"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Examples:</label>
          {examples.map(({ input, output, explanation }, index) => (
            <div
              key={index}
              className="border rounded-md p-3 mb-2 bg-stone-800 border-gray-900"
            >
              <div>
                <label>Input:</label>
                <textarea
                  value={input}
                  onChange={(e) =>
                    setExamples((prev) =>
                      prev.map((ex, i) =>
                        i === index ? { ...ex, input: e.target.value } : ex
                      )
                    )
                  }
                  className="w-full border border-gray-900 rounded-md px-2 py-1 mb-2  bg-stone-900"
                />
              </div>
              <div>
                <label>Output:</label>
                <textarea
                  value={output}
                  onChange={(e) =>
                    setExamples((prev) =>
                      prev.map((ex, i) =>
                        i === index ? { ...ex, output: e.target.value } : ex
                      )
                    )
                  }
                  className="w-full border border-gray-900 rounded-md px-2 py-1 mb-2  bg-stone-900"
                />
              </div>
              <div>
                <label>Explanation:</label>
                <textarea
                  value={explanation}
                  onChange={(e) =>
                    setExamples((prev) =>
                      prev.map((ex, i) =>
                        i === index
                          ? { ...ex, explanation: e.target.value }
                          : ex
                      )
                    )
                  }
                  className="w-full border border-gray-900 rounded-md px-2 py-1 mb-2  bg-stone-900"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setExamples((prev) => [
                ...prev,
                { input: "", output: "", explanation: "" },
              ])
            }
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Example
          </button>
        </div>

        <div>
          <label className="block font-medium">Constraints:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={tempConstraint}
              onChange={(e) => setTempConstraint(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter a constraint"
            />
            <button
              type="button"
              onClick={() => {
                if (tempConstraint) {
                  setConstraints((prev) => [...prev, tempConstraint]);
                  setTempConstraint("");
                }
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="mt-2 list-disc list-inside">
            {constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>

        <div>
          <label className="block font-medium">Test Cases:</label>
          {testCases.map(({ input, output }, index) => (
            <div key={index} className="border rounded-md p-3 mb-2 bg-gray-50">
              <div>
                <label>Input:</label>
                <textarea
                  value={input}
                  onChange={(e) =>
                    setTestCases((prev) =>
                      prev.map((tc, i) =>
                        i === index ? { ...tc, input: e.target.value } : tc
                      )
                    )
                  }
                  className="w-full border border-gray-300 rounded-md px-2 py-1 mb-2"
                />
              </div>
              <div>
                <label>Output:</label>
                <textarea
                  value={output}
                  onChange={(e) =>
                    setTestCases((prev) =>
                      prev.map((tc, i) =>
                        i === index ? { ...tc, output: e.target.value } : tc
                      )
                    )
                  }
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setTestCases((prev) => [...prev, { input: "", output: "" }])
            }
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Test Case
          </button>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Submit Problem
        </button>
      </form>
    </div>
  );
};

export default CreateNewProblem;
