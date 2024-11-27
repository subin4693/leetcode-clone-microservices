import React, { useState } from "react";
import Tabs from "./components/Tabs";
import { Link } from "react-router-dom";
import Skletion from "../../components/Skletion";

const ProblemSet = () => {
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [problemLoading, setProblemLoading] = useState(false);
  const tabs = [
    {
      _id: "all-topics",
      category: "All topics",
    },
    {
      _id: "abc",
      category: "Array",
    },
    {
      _id: "abcasd",
      category: "Linkedlist",
    },
    {
      _id: "asadfabc",
      category: "Stack",
    },
    {
      _id: "abasdfc",
      category: "Queue",
    },
  ];

  const rows = [
    {
      _id: "abc",
      title: "Two sum",
      difficulty: "Easy",
      category: "Array",
    },
    {
      _id: "dabc",
      title: "Two sum",
      difficulty: "Medium",
      category: "Array",
    },
    {
      _id: "abfc",
      title: "Two sum",
      difficulty: "Hard",
      category: "Array",
    },

    {
      _id: "absadfc",
      title: "Two sum",
      difficulty: "Easy",
      category: "Array",
    },
    {
      _id: "dsadfaabc",
      title: "Two sum",
      difficulty: "Medium",
      category: "Array",
    },
    {
      _id: "ar32bfc",
      title: "Two sum",
      difficulty: "Hard",
      category: "Array",
    },
  ];

  const AddRow = ({ rowNum, title, difficulty, category, _id }) => {
    return (
      <tr className={`${rowNum % 2 == 0 ? "bg-stone-800" : ""}`}>
        <td className="p-2">{rowNum + 1}</td>
        <td className="hover:text-blue-500">
          <Link to={`/problems/${_id}`}>{title}</Link>
        </td>
        <td
          className={`${
            difficulty.toLowerCase() == "easy"
              ? "text-green-500"
              : difficulty.toLowerCase() == "medium"
              ? "text-yellow-400"
              : difficulty.toLowerCase() == "hard"
              ? "text-red-400"
              : ""
          } `}
        >
          {difficulty}
        </td>
        <td className="">{category}</td>
      </tr>
    );
  };

  return (
    <div>
      <h1 className="text-xl font-bold mt-10">Problem sets</h1>
      <div className="flex justify-start items-center gap-5 mt-3 flex-wrap">
        {categoryLoading
          ? ["*", "*", "*", "*", "*"].map(({}, index) => (
              <Skletion className={"h-8 w-32 rounded-full"} key={index} />
            ))
          : tabs.map(({ _id, category }) => (
              <Tabs category={category} key={_id} _id={_id} />
            ))}
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr className="text-left">
            <th className="w-[10%] ">No</th>
            <th className="w-[50%] ">Title</th>
            <th className="w-[20%] ">Difficulty</th>
            <th className="w-[20%] ">Category</th>
          </tr>
        </thead>
        <tbody>
          {problemLoading
            ? ["*", "*", "*", "*", "*"].map(({}, index) => (
                <tr key={index}>
                  <td>
                    <Skletion className="w-[90%] h-8 rounded-md my-2" />
                  </td>

                  <td>
                    <Skletion className="w-[90%] h-8 rounded-md my-2" />
                  </td>
                  <td>
                    <Skletion className="w-[90%] h-8 rounded-md my-2" />
                  </td>
                  <td>
                    <Skletion className="w-[90%] h-8 rounded-md my-2" />
                  </td>
                </tr>
              ))
            : rows.map(({ _id, title, category, difficulty }, indexNo) => (
                <AddRow
                  _id={_id}
                  key={indexNo}
                  title={title}
                  category={category}
                  difficulty={difficulty}
                  rowNum={indexNo}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemSet;
