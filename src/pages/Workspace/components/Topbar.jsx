import React, { useEffect, useState } from "react";
// import profile from "../../assets/profile.jpg";
import profile from "../../../assets/profile.jpg";
import { Link } from "react-router-dom";

const Topbar = ({
  isContest,
  duration,
  handleRun,
  handleSubmit,
  submitLoading,
}) => {
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
        <buton
          className="flex cursor-pointer justify-center items-center bg-stone-800 p-1 px-3 rounded-sm text-xs hover:bg-stone-700 gap-1"
          onClick={handleRun}
        >
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
        <buton
          className={`flex justify-center items-center bg-stone-800 p-1 px-3 rounded-sm text-xs hover:bg-stone-700 text-green-500 gap-1 ${
            submitLoading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleSubmit}
          disabled={submitLoading}
        >
          {submitLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-500 w-16"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
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
              Submit{" "}
            </>
          )}
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
