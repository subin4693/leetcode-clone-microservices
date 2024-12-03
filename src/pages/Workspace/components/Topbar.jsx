import React, { useEffect, useState } from "react";
// import profile from "../../assets/profile.jpg";
import profile from "../../../assets/profile.jpg";
import { Link } from "react-router-dom";

const Topbar = ({ isContest, duration }) => {
  console.log(duration);
  const [timer, setTimer] = useState([duration, 0, 0]);
  useEffect(() => {
    if (!isContest) return;
    let timerInterval = setInterval(() => {
      setTimer((prev) => {
        let [hour, minute, second] = [...prev];

        if (second == 0 && minute == 0 && hour == 0) {
          clearInterval(timerInterval);
          return [0, 0, 0];
        }

        if (second == 0 && minute == 0 && hour > 0) {
          second = 59;
          minute = 59;
          hour--;
        }
        if (second == 0 && minute > 0) {
          second = 59;
          minute--;
        }
        if (second == 0) {
          second = 59;
        }
        if (second > 0) {
          second--;
        }

        return [hour, minute, second];
      });
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  console.log(timer);
  return (
    <div className="flex gap-5 justify-between items-center ">
      <div className="flex gap-5 justify-between items-center">
        <div className="h-4 w-4">
          <Link to="/">
            <img src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" />
          </Link>{" "}
        </div>
        <div className="flex  gap-5">
          <div className="text-stone-400 flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <span className="text-stone-200">Problem set</span>
          </div>
          <div className="flex justify-center items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        <buton className="flex justify-center items-center bg-stone-800 p-1 px-3 rounded-sm text-xs hover:bg-stone-700 gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Run
        </buton>
        <buton className="flex justify-center items-center bg-stone-800 p-1 px-3 rounded-sm text-xs hover:bg-stone-700 text-green-500 gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
            />
          </svg>
          Submit
        </buton>
        {isContest && (
          <div className="bg-stone-800 rounded-sm flex justify-center items-center px-2 hover:bg-stone-700">{`${timer[0]}:${timer[1]}:${timer[2]}`}</div>
        )}
      </div>
      <div>
        <div className="flex justify-center items-center gap-2">
          <div className="h-6 w-6 bg-white rounded-full overflow-hidden">
            <img src={profile} className="h-full w-full object-cover" />{" "}
          </div>{" "}
          Subin
        </div>
      </div>
    </div>
  );
};

export default Topbar;
