import { NextPage } from "next";
import React from "react";

type SkillProps = {
  name: string;
  level: number;
};

const getLevelColor = (level: number): string => {
  if (level >= 90) {
    return "bg-green-500"; // Expert
  } else if (level >= 70) {
    return "bg-blue-500"; // Professional
  } else if (level >= 50) {
    return "bg-yellow-500"; // Average
  } else if (level >= 40) {
    return "bg-orange-500"; // Amateur
  } else {
    return "bg-red-500"; // Beginner
  }
};

const skills: SkillProps[] = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 80 },
  { name: "Python", level: 50 },
  { name: "JavaScript", level: 50 },
  { name: "TypeScript", level: 20 },
  { name: "React", level: 50 },
  { name: "Next.js", level: 40 },
  { name: "Tailwind CSS", level: 40 },
  // Add more skills as needed
];

const Skill: React.FC<SkillProps> = ({ name, level }) => (
  <li className="w-full flex items-center gap-3 mb-4 md:mb-2 last:mb-0">
    <div className="grid grid-cols-1 md:grid-cols-1 w-full">
      <span className="text-gray-700">{name}</span>
      <span className="text-gray-700 text-right">{level}%</span>
      <div className="h-2 rounded-full overflow-hidden relative">
        <div
          style={{ width: `${level}%` }}
          className={`h-full rounded-full ${getLevelColor(level)}`}
        />
        <div className="absolute inset-0 bg-light/5 border" />
      </div>
    </div>
  </li>
);

const SkillsPage: NextPage = () => (
  <div className="px-6 py-16 mt-15">
    <h1 className="text-4xl font-bold mb-10">Skills</h1>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-15 list-none mx-auto w-full max-w-5xl md:w-full">
      {skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </ul>
    <div className="mt-16 px-10 lg:px-40 md:px-20">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 bg-green-500 rounded-full"></div>
          <span>Expert</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 bg-blue-500 rounded-full"></div>
          <span>Professional</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 bg-yellow-500 rounded-full"></div>
          <span>Average</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 bg-orange-500 rounded-full"></div>
          <span>Amateur</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 bg-red-500 rounded-full"></div>
          <span>Beginner</span>
        </div>
      </div>
    </div>
  </div>
);

export default SkillsPage;
