import { skillsLine } from "../../src/data";
import Marquee from "react-fast-marquee";

export default function TopFooter({ theme }: { theme: string | undefined }) {
  const gradientTheme = theme === "light" ? "#ffffff" : "#0a0a0a";

  return (
    <div className="flex w-full m-auto py-4 lg:py-8 text-gray-600 dark:text-[#7dacd6]">
      {/* <div className="flex max-w-[1450px] xl:max-w-[910px] lg:max-w-[650px] md:max-w-[750px] sm:max-w-[600px] xs:max-w-[450px] ls:max-w-[300px] w-full m-auto text-base"> */}
      <Marquee
        speed={30}
        direction="left"
        gradient={true}
        gradientWidth="50px"
        gradientColor={gradientTheme}
      >
        <ul className="flex justify-center items-center">
          {skillsLine.map((skill) => {
            return (
              <li
                key={skill.id}
                className="flex items-center px-4 md:px-3 sm:px-3 xs:px-2 ls:px-2"
              >
                <skill.icon className="mr-1" />
                {skill.name}
              </li>
            );
          })}
        </ul>
      </Marquee>
    </div>
  );
}
