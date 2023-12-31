import aboutImg from "../assets/aboutImg2.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInAnimation, staggerAnimation } from "../animation";

const About = () => {
  const AnimatedParagraph = ({ index, children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return (
      <motion.div
        className="pt-4 leading-[1.5]"
        ref={ref}
        variants={slideInAnimation}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        custom={index}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div
      id="about"
      className="section flex flex-col items-center py-[50px] gap-10 bg-primary md:flex-row"
    >
      <div className="max-w-[80%] lg:min-w-[40%] about-img">
        <img src={aboutImg} alt="Photo" />
      </div>

      <motion.div
        className="" //about me content start here
        variants={staggerAnimation}
        initial="initial"
        animate="animate"
      >
        <h1 className="lg:text-7xl md:text-5xl text-5xl mx-auto flex items-center font-bold text-white  heading-line">
          About Me
        </h1>

        <div className="mt-10 lg:text-3xl text-2xl text-slate-400">
          <AnimatedParagraph index={0}>
            Hello! My name is Inaolaji Tope Michael, a firm believer in
            user-centric design principles.
          </AnimatedParagraph>

          <AnimatedParagraph index={1}>
            My journey into the world of development began during my industrial
            training, where I was introduced to the fundamental languages of
            web: HTML, CSS and JavaScript.
          </AnimatedParagraph>

          <AnimatedParagraph index={2}>
            Although my initial exposure was during the industrial training, it
            was not until 2021 that I reignited my interest in frontend
            development.
          </AnimatedParagraph>

          <AnimatedParagraph index={3}>
            Beyond coding, I am a seasoned graphic designer. My creative flair
            and technical prowess combine to make me a versatile professional in
            both the visual and functional aspects of digital projects.
          </AnimatedParagraph>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
