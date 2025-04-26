'use client';
import React from "react";
import { motion } from "framer-motion";

const ProgressBar: React.FC<{ progress: number; color: string; label: string }> = ({
  progress,
  color,
  label,
}) => {
  return (
    <motion.div
      className="flex flex-col items-start gap-2 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Label */}
      <motion.span
        className="text-sm font-semibold text-white "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.span>
      {/* Progress Bar */}
      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute h-full rounded-full transition-all duration-500 ease-in-out"
          style={{
            backgroundColor: color,
            boxShadow: `0px 2px 4px ${color}66`,
          }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default ProgressBar;
