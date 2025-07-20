import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skills = () => {
  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10 sm:mt-20'>
        {technologies.map((technology) => (
          <div className="text-center" key={technology}>
            <div className='w-12 md:w-20 md:h-28 auto' key={technology}>
              <img width={100} src={`https://skillicons.dev/icons?i=${technology}`} />
            </div>
            <p className='hidden md:block text-white text-[14px]'>{technology.charAt(0).toUpperCase() + technology.slice(1)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills", {
  subHeading: "What I can do",
  heading: "My Skills",
  className: "text-center",
});
