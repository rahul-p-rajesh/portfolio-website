import React, { CSSProperties, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import type { Application, SPEObject } from "@splinetool/runtime";
import { motion } from "framer-motion";

export default function Hero() {
  const splineStyling: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div className="background-section  absolute inset-0  w-full h-full z-0 flex justify-center items-center">
        {/* TODO: Add lazy loading to spline component and also option to set zoom size based on screen dimension  */}
        <Spline
          style={splineStyling}
          scene="https://prod.spline.design/7Lxl2RGuyGmWBVo0/scene.splinecode"
        />
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

            <button className="bg-dark-green hover:bg-dark-green-hover text-white font-semibold px-6 py-3 rounded-md transition duration-300">
              Connect with me
            </button>
            {/* TODO: Add scroll svg section here */}
          </div>
        </div>
      </section>
    </>
  );
}
//border-2 border-amber-200
