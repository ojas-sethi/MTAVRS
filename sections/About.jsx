"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="About" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-8 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          Welcome to
          <span className="font-extrabold text-white"> MTAVRS</span>, the world
          of the future. We are driven by a singular vision: to revolutionize
          and simplify the way you engage with the extraordinary world of the
          metaverse. As technology advances and virtual realms become
          increasingly immersive, we believe that everyone should have the
          opportunity to explore and enjoy the
          <span className="font-extrabold text-white">
            {" "}
            limitless possibilities{" "}
          </span>
          of this digital frontier.
          <span className="font-extrabold text-white">
            {" "}
            Democratize the metaverse with us
          </span>
          .
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="Down Arrow"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
