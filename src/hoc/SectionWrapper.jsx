import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";

const StarWrapper = (Component, idName, title=null) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>&nbsp;</span>

        {title && <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} ${title.className}`}>
            {title.subHeading}
          </p>
          <h2 className={`${styles.sectionHeadText} ${title.className}`}>
            {title.heading}
          </h2>
        </motion.div>}
        
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
