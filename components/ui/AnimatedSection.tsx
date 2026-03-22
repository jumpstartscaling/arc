"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({ children, delay = 0, id }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: "easeOut" }}
      className="animated-section"
    >
      {children}
    </motion.section>
  );
}
