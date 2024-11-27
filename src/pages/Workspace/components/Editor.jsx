import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark, vscodeDarkInit } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

const Editor = ({ code, setCode }) => {
  return (
    <div className="w-full overflow-auto bg-stone-800  rounded-lg ">
      <div className="flex gap-2  p-2">
        <div className="text-xs flex   items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z"
              clipRule="evenodd"
            />
          </svg>
          Code
        </div>
        <span className="text-xs bg-stone-700 p-1 rounded-md px-2">
          {" "}
          JavaScript
        </span>
      </div>
      <CodeMirror
        value={code}
        theme={vscodeDark}
        className="min-h-[100vh] bg-[#1e1e1e]"
        extensions={[javascript()]}
        onChange={(value, viewUpdate) => {
          setCode(value);
        }}
      />
    </div>
  );
};

export default Editor;
