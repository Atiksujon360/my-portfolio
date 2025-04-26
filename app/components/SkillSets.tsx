'use client';
import React from "react";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const SkillSets: React.FC = () => {
  return (
    <div className="relative mx-auto flex px-5 py-2 md:flex-row flex-col items-center" >
      <motion.h2
        className="text-xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Progress Overview
      </motion.h2>
      <motion.div
        className="flex flex-row gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <ProgressBar
          progress={70}
          color="#4F46E5"
          label="Frontend Development"
        />
        <ProgressBar
          progress={50}
          color="#10B981"
          label="Backend Development"
        />
        <ProgressBar progress={90} color="#F59E0B" label="UI/UX Design" />
        <ProgressBar progress={60} color="#000000"  label="DevOps" />
      </motion.div>
    </div>
  );
};

export default SkillSets;
