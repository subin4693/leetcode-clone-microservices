import React from "react";

const Problem = ({
  title,
  description,
  difficulty,
  likes,
  dislikes,
  examples,
  constraints,
}) => {
  const Pills = ({ Icon, text, colour }) => {
    return (
      <div
        className={`${colour} bg-stone-700  px-2 rounded-full text-xs  py-1 flex gap-1`}
      >
        {Icon && Icon}
        {text}
      </div>
    );
  };
  return (
    <div className="bg-stone-800 rounded-lg overflow-hidden text-sm ">
      <div className="flex  items-center gap-1 font-semibold  px-3 py-1 bg-stone-700 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        Description
      </div>
      <div className=" h-[calc(100vh-100px)] overflow-auto">
        <div className="px-3 py-1 px-3 py-5 ">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="flex items-center my-3 gap-2">
            <Pills text={difficulty} colour="text-green-500" />
            <Pills
              text={likes}
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              }
            />
            <Pills
              text={dislikes}
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                  />
                </svg>
              }
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className=" px-3 py-1 space-y-5">
          {examples.map(({ input, output, explanation }, index) => {
            return (
              <div className="">
                <h1 className="font-bold">Example {index + 1} : </h1>
                <div className="pl-5 border-l border-l-stone-500 mt-3">
                  <div className="flex items-center">
                    <h2 className="font-bold">Input : </h2>
                    {input}
                  </div>
                  <div className="flex items-center">
                    <h2 className="font-bold">Output : </h2>
                    {output}
                  </div>
                  <div className="flex items-center">
                    <h2 className="font-bold">Explanation : </h2>
                    {explanation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" px-3 py-1 ">
          <h1 className="font-bold text-sm">Constraints</h1>
          <ul className="mt-3 pl-5 text-sm list-disc space-y-2">
            {constraints.map((constraint) => {
              return <li>{constraint}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Problem;
