import React, { useRef, useState, useEffect, useCallback } from "react";
import Topbar from "./components/Topbar";
import Problem from "./components/Problem";
import Editor from "./components/Editor";
import Testcase from "./components/Testcase";
import Split from "react-split";
const Workspace = () => {
  const [code, setCode] = useState("");

  const [problem, setProblem] = useState({
    title: "1. Two Sum",
    description: `<p>Given an <strong>array</strong> of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    <br /><br />
                  You may assume that each input would have exactly one solution, and you may not use the same element twice.<br /><br />
                  You can return the answer in any order.</p>`,
    difficulty: "Easy",
    likes: "50",
    dislikes: "32",
    examples: [
      {
        input: " nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: " Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: " nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: " Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: " nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: " Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
    ],
    constraints: [
      "2 <= nums.length <= 104",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists.",
    ],
    followup:
      "Can you come up with an algorithm that is less than O(n2) time complexity?",
    isContest: false,
    duration: 2,
  });

  return (
    <section className="bg-stone-900 min-h-screen text-white p-3 overflow-hidde">
      <Topbar isContest={problem?.isContest} duration={problem?.duration} />
      <div className="flex mt-3 overflow-y-hidde">
        <Split className="split w-full">
          <Problem
            title={problem?.title}
            description={problem?.description}
            difficulty={problem?.difficulty}
            likes={problem?.likes}
            dislikes={problem?.dislikes}
            examples={problem?.examples}
            constraints={problem?.constraints}
            followup={problem?.followup}
          />
          <Split
            className="h-[calc(100vh-70px)]  "
            direction="vertical"
            sizes={[60, 40]}
            minSize={60}
          >
            <Editor code={code} setCode={setCode} />

            <Testcase />
          </Split>{" "}
        </Split>
      </div>
    </section>
  );
};

export default Workspace;
