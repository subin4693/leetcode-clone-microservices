import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import ReactQuill from "react-quill";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import "react-quill/dist/quill.snow.css";
import CodeMirror from "@uiw/react-codemirror";
const CreateNewContest = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [examples, setExamples] = useState([]);
  const [constraints, setConstraints] = useState([]);
  const [testCases, setTestCases] = useState(null);
  const [starterCode, setStarterCode] =
    useState(`function /*function name*/(/*arguments*/){
    //Write codes here
}`);
  const [contestName, setContestName] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState("");
  const [bannerImage, setBannerImage] = useState(null);

  const fileTypes = ["JSON"];

  const handleChange = (file) => {
    console.log(file);
    setTestCases(file);
  };

  const handleBannerImage = (file) => {
    setBannerImage(file);
    console.log(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title: title,
      description: description,
      examples: examples,
      constraints: constraints,
      testCases: testCases,
      starterCode: starterCode,
      contestName: contestName,
      date: date,
      duration: duration,
      startTime: startTime,
      bannerImage: bannerImage,
    });
  };

  return (
    <div className="flex  justify-center  items-center">
      <form className="w-full sm:w-2/3 space-y-3 py-10" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Banner image</h2>

          <FileUploader
            handleChange={handleBannerImage}
            name="file"
            types={["SVG", "JPG", "JPEG"]}
            className="w-full h-20 bg-stone-700 border border-dashed block cursor-pointer flex justify-center items-center rounded-md"
          />
        </div>
        <div>
          <label className="text-xl font-bold">Contest name</label>
          <br />
          <input
            type="text"
            className="bg-stone-700 rounded-md mt-1 w-full p-1"
            value={contestName}
            onChange={(e) => setContestName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl font-bold">Date</label>
          <br />
          <input
            type="date"
            className="bg-stone-700 rounded-md mt-1 w-full p-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl font-bold">Duration</label>
          <br />
          <input
            type="number"
            min={1}
            className="bg-stone-700 rounded-md mt-1 w-full p-1"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl font-bold">Starting time</label>
          <br />
          <input
            type="time"
            className="bg-stone-700 rounded-md mt-1 w-full p-1"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl font-bold">Title</label>
          <br />
          <input
            type="text"
            className="bg-stone-700 rounded-md mt-1 w-full p-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl font-bold">Description</label>
          <br />
          <ReactQuill
            theme="snow"
            value={description}
            className="bg-stone-700"
            onChange={setDescription}
          />
        </div>
        <div>
          <label className="text-xl font-bold">Examples</label>
          <br />
          {examples.map(({ input, output, explanation }, index) => {
            return (
              <React.Fragment key={index}>
                <label className="font-bold">Example {index + 1}</label>
                <div className="mt-2">
                  <label className="text-md">Input &nbsp;&nbsp;</label>
                  <textarea
                    className="bg-stone-700 w-full mt-2"
                    value={input}
                    onChange={(e) => {
                      setExamples((prev) => {
                        const temp = [...prev];
                        temp[index].input = e.target.value;
                        return temp;
                      });
                    }}
                  />
                </div>
                <div className="  mt-2">
                  <label className="text-md">Output &nbsp;&nbsp;</label>
                  <textarea
                    className="bg-stone-700 w-full mt-2 "
                    value={output}
                    onChange={(e) => {
                      setExamples((prev) => {
                        const temp = [...prev];
                        temp[index].output = e.target.value;
                        return temp;
                      });
                    }}
                  />
                </div>
                <div className="  mt-2">
                  <label className="text-md">Explanation &nbsp;&nbsp;</label>
                  <textarea
                    className="bg-stone-700 w-full mt-2 "
                    value={explanation}
                    onChange={(e) => {
                      setExamples((prev) => {
                        const temp = [...prev];
                        temp[index].explanation = e.target.value;
                        return temp;
                      });
                    }}
                  />
                </div>
              </React.Fragment>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setExamples((prev) => [
                ...prev,
                {
                  input: "",
                  output: "",
                  explanation: "",
                },
              ]);
            }}
            className="text-center bg-white hover:bg-orange-500 w-full rounded-md text-black py-1"
          >
            Add
          </button>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Constraints</h2>
          {constraints.map((val, index) => {
            return (
              <input
                type="text"
                value={val}
                className="bg-stone-700 rounded-md mt-1 w-full p-1"
                key={index}
                onChange={(e) =>
                  setConstraints((prev) => {
                    const temp = [...prev];
                    temp[index] = e.target.value;
                    return temp;
                  })
                }
              />
            );
          })}
          <button
            type="button"
            onClick={() => {
              setConstraints((prev) => [...prev, ""]);
            }}
            className="text-center bg-white hover:bg-orange-500 w-full rounded-md text-black py-1"
          >
            Add
          </button>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Testcases</h2>
          <label>Select testcase file : </label>{" "}
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            className="w-full h-20 bg-stone-700 border border-dashed block cursor-pointer flex justify-center items-center rounded-md"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold">Starter Template</h2>
          <CodeMirror
            value={starterCode}
            theme={vscodeDark}
            className="max-h-[50vh] min -h-[50vh] bg-[#1e1e1e] rounded overflow-hidden border overflow-y-auto"
            extensions={[javascript()]}
            onChange={(value, viewUpdate) => {
              setStarterCode(value);
            }}
          />
        </div>

        <button
          type="submit"
          className=" w-full bg-orange-500 text- py-1 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateNewContest;
