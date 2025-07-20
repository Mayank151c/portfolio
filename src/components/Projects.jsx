import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  techStack,
  colors,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl md:w-[360px] w-full'
      >
        {
          image && 
          <div className='relative w-full h-[200px] mb-5'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            {source_code_link && <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>}
          </div>
        }

        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{
          description.map((desc) => <ul key={desc} className="list-disc ml-5">
            <li>{desc}</li>
          </ul>)
        }</p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {techStack.map((tech, index) => (
            <p
              key={`${name}-${tech}`}
              className={`text-[14px] text-${colors[index%colors.length]}`}
            >
              #{tech}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience with various
          technologies. Each project is briefly described with my contributions,
          tools, and outcomes.
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7 md:w-full'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects", {
  subHeading: "My work",
  heading: "Projects",
});
