import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContestCard from "./components/ContestCard";
import PastContestCard from "../../Contests/components/PastContestCard";
import { PieChart } from "react-minimal-pie-chart";
const Dashboard = () => {
  const [pastContests, setPastContests] = useState([
    {
      _id: "sdf",
      image:
        "https://framerusercontent.com/images/8NIvRumTIMfeFXK5KslQVmXZE.webp",
      title: "Weekly contest 124",
      date: "2000-10-31T01:30:00.000-05:00",
    },
    {
      _id: "sdf",
      image:
        "https://framerusercontent.com/images/8NIvRumTIMfeFXK5KslQVmXZE.webp",
      title: "Weekly contest 124",
      date: "2000-10-31T01:30:00.000-05:00",
    },
    {
      _id: "sdf",
      image:
        "https://framerusercontent.com/images/8NIvRumTIMfeFXK5KslQVmXZE.webp",
      title: "Weekly contest 124",
      date: "2000-10-31T01:30:00.000-05:00",
    },
    {
      _id: "sdf",
      image:
        "https://framerusercontent.com/images/8NIvRumTIMfeFXK5KslQVmXZE.webp",
      title: "Weekly contest 124",
      date: "2000-10-31T01:30:00.000-05:00",
    },
    {
      _id: "sdf",
      image:
        "https://framerusercontent.com/images/8NIvRumTIMfeFXK5KslQVmXZE.webp",
      title: "Weekly contest 124",
      date: "2000-10-31T01:30:00.000-05:00",
    },
  ]);

  const [contests, setContests] = useState([
    {
      _id: "sdf",
      image:
        "https://framerusercontent.com/images/8NIvRumTIMfeFXK5KslQVmXZE.webp",
      title: "Weekly contest 124",
      date: "2000-10-31T01:30:00.000-05:00",
    },
    {
      _id: "sdf",
      image:
        "https://framerusercontent.com/images/8NIvRumTIMfeFXK5KslQVmXZE.webp",
      title: "Weekly contest 124",
      date: "2000-10-31T01:30:00.000-05:00",
    },
    {
      _id: "sdf",
      image:
        "https://framerusercontent.com/images/8NIvRumTIMfeFXK5KslQVmXZE.webp",
      title: "Weekly contest 124",
      date: "2000-10-31T01:30:00.000-05:00",
    },
  ]);
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
  ];

  const AddRow = ({ rowNum, title, difficulty, category, _id }) => {
    return (
      <tr className={`${rowNum % 2 == 0 ? "bg-stone-700" : ""}`}>
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
    <div className="py-5">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="h-[50vh] overflow-auto p-2 bg-stone-800 rounded-lg">
          <div className="flex justify-between ">
            <h1 className="font-bold text-xl">Total problems</h1>
            <Link to="/create-problem">
              <button className="bg-orange-500 rounded-md px-2 py-1 hover:bg-orange-400 text-sm">
                Create Problem
              </button>
            </Link>
          </div>

          <table className="w-full mt-5 ">
            <thead>
              <tr className="text-left">
                <th className="w-[10%] ">No</th>
                <th className="w-[50%] ">Title</th>
                <th className="w-[20%] ">Difficulty</th>
                <th className="w-[20%] ">Category</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ _id, title, category, difficulty }, indexNo) => (
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
        <div className="bg-stone-800 p-2 rounded-lg">
          <h2 className="font-bold text-xl ">Problem Types</h2>
          <div className="flex justify-center items-center">
            <PieChart
              className="h-[43vh]"
              lineWidth="50"
              paddingAngle="2"
              label={(e) => {
                return e.dataEntry.value + "%";
              }}
              labelStyle={() => {
                return {
                  "font-size": "10px",
                  color: "white",
                };
              }}
              labelPosition="70"
              data={[
                { title: "Hard", value: 10, color: "#ef4444" },
                { title: "Medium", value: 15, color: "#eab308" },
                { title: "Easy", value: 20, color: "#16a34a" },
              ]}
            />
          </div>
        </div>
      </div>
      {/* <div>
        <div className="flex justify-between mt-10">
          <h2 className="font-bold text-xl">Total contests</h2>
          <Link to="/create-contest">
            <button className="bg-orange-500 rounded-md px-2 py-1 hover:bg-orange-400 text-sm">
              Create contest
            </button>
          </Link>
        </div>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5 ">
          {contests.map(({ _id, image, title, date }) => {
            return (
              <ContestCard
                key={_id}
                image={image}
                title={title}
                date={date}
                _id={_id}
              />
            );
          })}
        </div>{" "}
        <div className="mt-5 space-y-3">
          {pastContests.map(({ _id, image, title, date }) => {
            return (
              <PastContestCard
                key={_id}
                _id={_id}
                image={image}
                title={title}
                date={date}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
