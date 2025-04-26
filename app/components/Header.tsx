"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white body-font "
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-700 rounded-full"
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </motion.svg>
          <motion.span
            className="ml-3 text-xl font-bold"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            My Portfolio
          </motion.span>
        </Link>

        {/* Navigation Links */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {tabs.map((tab, index) => (
            <Link key={index} href={tab.href}>
              <motion.div
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveTab(tab.name)}
                className={`mr-5 cursor-pointer ${
                  activeTab === tab.name
                    ? "text-white font-bold"
                    : "text-gray-400"
                }`}
              >
                {tab.name}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Hire Me Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#ffffff",
            color: "#4F46E5",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-indigo-500 text-white rounded text-base mt-4 md:mt-0 cursor-pointer"
        >
          Hire Me
          <motion.svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
