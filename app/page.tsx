"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SkillSets from "./components/SkillSets";
import profileImage from "./assests/profile-image.png";

function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center py-20"
        >
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 flex flex-wrap gap-2">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              Hi,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              I&apos;m
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block text-white font-bold"
            >
              Md Atikur Rahman
            </motion.span>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="inline-block"
            >
              {"A Passionate Web Developer".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                </motion.span>
              ))}
            </motion.div>
          </h1>
          <p className="mb-8 leading-relaxed text-white text-md">
            {[
              "As",
              "a",
              "passionate",
              "Software",
              "Developer",
              "and",
              "Assistant",
              "Manager",
              "at",
              "OCBC",
              "Bank,",
              "I",
              "specialize",
              "in",
              "crafting",
              "user-centric,",
              "scalable",
              "digital",
              "solutions",
              "through",
              "React,",
              "React",
              "Native,",
              "and",
              "micro-frontend",
              "architecture.",
              "With",
              "a",
              "Bachelor's",
              "in",
              "Computer",
              "Science",
              "from",
              "IUKL",
              "and",
              "a",
              "strong",
              "foundation",
              "in",
              "web",
              "and",
              "mobile",
              "development,",
              "I",
              "bridge",
              "technical",
              "excellence",
              "with",
              "real-world",
              "impact.",
              "Driven",
              "by",
              "innovation,",
              "continuous",
              "learning,",
              "and",
              "collaboration,",
              "I",
              "thrive",
              "in",
              "dynamic",
              "environments",
              "and",
              "am",
              "committed",
              "to",
              "delivering",
              "seamless,",
              "intuitive",
              "experiences",
              "that",
              "propel",
              "digital",
              "transformation",
              "forward.",
            ].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex text-gray-700 bg-amber-50 border-0 py-2 px-6 rounded-2xl focus:outline-none hover:bg-indigo-600   text-lg cursor-pointer "
            >
              Download My Resume
            </motion.button>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-2xl text-lg cursor-pointer"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center"
        >
          <div className="relative w-90 h-90 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <Image
              className="object-cover object-center"
              alt="Hero image of Md Atikur Rahman"
              src={`${profileImage.src}`}
              fill
            />
          </div>
        </motion.div>
      </div>
      <div className="container mx-auto px-5 py-8">
        <h2 className="text-3xl   text-white font-bold text-center mb-8">
          My Skills
        </h2>
        <motion.div
          className="flex flex-wrap -m-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              title: "Frontend Development",
              description: "React, Next.js, Tailwind CSS",
              icon: (
                <svg
                  className="text-white w-12 h-12 mb-3 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                </svg>
              ),
            },
            {
              title: "Backend Development",
              description: "Node.js, Express, MongoDB",
              icon: (
                <svg
                  className="text-white w-12 h-12 mb-3 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l9 4.5-9 4.5-9-4.5L12 2z"></path>
                </svg>
              ),
            },
            {
              title: "UI/UX Design",
              description: "Figma, Adobe XD",
              icon: (
                <svg
                  className="text-white w-12 h-12 mb-3 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              ),
            },
            {
              title: "DevOps",
              description: "Docker, AWS, CI/CD",
              icon: (
                <svg
                  className="text-white w-12 h-12 mb-3 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l9 4.5-9 4.5-9-4.5L12 2z"></path>
                </svg>
              ),
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 md:w-1/4 sm:w-1/2 w-full"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                {skill.icon}
                <h3 className="title-font font-medium text-lg text-white">
                  {skill.title}
                </h3>
                <p className="leading-relaxed text-base text-white">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
      >
        <SkillSets />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className=" text-white py-8"
      >
        <div className="px-4">
          <div className="container mx-auto text-center border-2 border-gray-200 rounded-2xl p-8">
            <h2 className="text-3xl font-medium mb-4">
              Ready to start your next project?
            </h2>
            <p>
              Let&apos;s connect and discuss your project requirements.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
