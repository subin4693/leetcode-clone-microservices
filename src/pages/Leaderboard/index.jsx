import React from "react";

const LeaderBoard = () => {
  const rating = [
    {
      rank: 1,
      name: "subin",
    },
    {
      rank: 1,
      name: "subin",
    },
    {
      rank: 1,
      name: "subin",
    },
    {
      rank: 1,
      name: "subin",
    },
    {
      rank: 1,
      name: "subin",
    },
  ];
  return (
    <div>
      <h1>Leaderboard : </h1>
      <table className="bg-stone-700 w-full rounded-md ">
        <thead className="bg-stone-700">
          <tr className="text-left ">
            <th className="p-5 ">Rank</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody className="p-4">
          {rating.map(({ name, rank }, index) => {
            return (
              <tr className={index % 2 == 0 ? "bg-stone-800" : "bg-stone-900"}>
                <td className="p-5">{rank}</td>

                <td className="p-5">{name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
