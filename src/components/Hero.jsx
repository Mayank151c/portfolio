import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mayank Choudhary</span>
          </h1>
          <p className={`${styles.heroSubText} lg:mt-10 md:mt-6  mt-4 text-white-100`}>
            Fullstack Software Developer,<br/>Cloud & AI Enthusiast
          </p>
          <p className={`text-[#dfd9ff] font-medium lg:text-[24px] sm:text-[22px] xs:text-[18px] text-[16px] lg:leading-[50px] md:mt-16 md:mt-12 mt-10 text-blue-100`}>
            Building backend systems with purpose, precision, and power.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
