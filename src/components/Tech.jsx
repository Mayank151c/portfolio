import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className="text-center">
          <div className='w-12 md:w-20 md:h-28 auto' key={technology}>
            <img width={100} src={`https://skillicons.dev/icons?i=${technology}`} />
          </div>
          <p className='hidden md:block text-white text-[14px]'>{technology.charAt(0).toUpperCase() + technology.slice(1)}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
