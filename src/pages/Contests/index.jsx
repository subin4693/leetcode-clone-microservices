import React, { useState } from "react";
import Banner from "./components/Banner";
import PastContestCard from "./components/PastContestCard";
import ContestCard from "./components/ContestCard";

const Contests = () => {
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

  return (
    <div>
      <Banner />
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
      </div>
      <div className="bg-stone-800 p-3 rounded-md ">
        <div className="text-white bg-stone-700 w-fit p-2 rounded-md">
          Past contests
        </div>
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
      </div>
    </div>
  );
};

export default Contests;
