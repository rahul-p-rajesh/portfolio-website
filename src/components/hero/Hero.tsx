import React, { CSSProperties, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import type { Application, SPEObject } from "@splinetool/runtime";
import { motion } from "framer-motion";
import Avatar from "../avatar/Avatar";

export default function Hero() {
  return (
    <div className="w-screen h-screen ">
      <div className="background-section  absolute inset-0  w-full h-full flex justify-center items-center ">
        <Avatar></Avatar>
      </div>
      <section className="flex h-full justify-left items-center px-6  flex-wrap-reverse">
        <div className="text-section z-1 h-full sm:h-fit  w-full md:w-1/2 lg:pl-1 flex justify-center items-center">
          <div className="max-w-3xl text-left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-light text-white mb-2"
            >
              Hello, I am
            </motion.h1>
            <motion.h2
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl font-semibold bg-gradient-to-r from-green-400 to-cyan-600 text-transparent bg-clip-text pb-3"
            >
              Rahul P Rajesh
            </motion.h2>
            <p className="text-gray-200 text-lg max-w-md my-3">
              I am a software engineer with 4 years of experience as a full
              stack developer.
            </p>

            <div className="social-links flex justify-start items-center">
              {/*Linkedin */}
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rahul-p-rajesh-01b310197/",
                    "_blank"
                  )
                }
                className="bg-dark-green hover:bg-dark-green-hover text-white font-semibold w-12 h-12 rounded-md transition duration-300 flex items-center justify-center mr-3 cursor-pointer"
              >
                <img
                  src="/linkedin.png"
                  alt="Linkedin"
                  className="w-6 h-6 invert"
                />
              </button>
              {/* Twitter */}
              {/* TODO: Add twitter */}
              {/* <button className="bg-dark-green hover:bg-dark-green-hover text-white font-semibold w-12 h-12 rounded-md transition duration-300 flex items-center justify-center mr-3 cursor-pointer">
                <img
                  src="/twitter-logo.png"
                  alt="Twitter"
                  className="w-6 h-6 invert"
                />
              </button> */}
              {/* Github */}
              <button
                onClick={() =>
                  window.open("https://github.com/rahul-p-rajesh", "_blank")
                }
                className="bg-dark-green hover:bg-dark-green-hover text-white font-semibold w-12 h-12 rounded-md transition duration-300 flex items-center justify-center cursor-pointer"
              >
                <img
                  src="/github-logo.png"
                  alt="GitHub"
                  className="w-6 h-6 invert"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
