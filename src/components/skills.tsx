import { skills } from "@/data";

export default function Skills() {
  return (
    <div className="flex flex-col p-2 lg:p-4   lg:border-1 lg:rounded-lg  lg:border-slate-400/50 ">
      {/* <div className="flex flex-col p-4 border-none  lg:border-1 lg:rounded-lg lg:border-slate-400/50 dark:lg:border-slate-400/50 "> */}
      <h1 className="text-xl lg:text-2xl uppercase font-semibold tracking-widest ">
        Skills
      </h1>
      <ul role="list" className="py-4 divide-y divide-slate-400/50">
        {skills.map((el) => {
          const iconPic =
            el.icon === null ? (
              ""
            ) : (
              <el.icon className="inline h-5 w-5 pb-1 ml-1" />
            );
          return (
            <li
              key={el.id}
              className="py-3 first:pt-0 last:pb-0 text-balance   "
              // className="py-3 first:pt-0 last:pb-0 lg:text-balance md:text-wrap  "
              // className="py-6 lg:py-4 xl:py-3 md:py-3 first:pt-0 last:pb-0 sm:pr-1 xs:pr-1 ls:pr-1"
            >
              <p>
                {el.title}
                <span>{iconPic}</span>
                {el.text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
