import React from "react";
import "./style.scss";
import { motion, AnimationControls, Variants } from "framer-motion";
import { defaultTransition } from "../../utils/transition";

type Props = {
  title: string;
  loaderControls: AnimationControls;
};

const variants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },
};

export default function Loader({ title, loaderControls }: Props) {
  return (
    <motion.div className="full-loader" animate={loaderControls}>
      <motion.h1
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        transition={defaultTransition}
      >
        {title}
        <p className="text-lg">Software Engineer</p>
      </motion.h1>
    </motion.div>
  );
}
