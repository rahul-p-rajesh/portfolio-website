import React from "react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="flex justify-center items-center px-6  flex-wrap">
      <div className="left-section h-full w-full md:w-1/2 lg:pl-1 flex justify-center items-center">
        <div className="max-w-3xl text-left">
          <h1 className="text-5xl sm:text-6xl font-light text-white mb-2">
            Hello, I am
          </h1>
          <h2 className="text-5xl sm:text-6xl font-semibold bg-gradient-to-r from-green-400 to-cyan-600 text-transparent bg-clip-text pb-3">
            Rahul P Rajesh
          </h2>
          <p className="text-gray-400 text-lg max-w-md my-3">
            I am a software engineer with 4 years of experience as a product
            engineer.
          </p>
          <button className="bg-dark-green hover:bg-dark-green-hover text-white font-semibold px-6 py-3 rounded-md transition duration-300">
            Connect with me
          </button>
          {/* TODO: Add scroll svg section here */}
        </div>
      </div>
      <div className="right-section  h-full w-full md:w-1/2 flex justify-center items-center ">
        {/* TODO: Add lazy loading to spline component  */}
        <Spline
          style={{
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
          }}
          scene="https://prod.spline.design/f-3aw8WpoVadB4ia/scene.splinecode"
        />
      </div>
    </section>
  );
}
//border-2 border-amber-200
