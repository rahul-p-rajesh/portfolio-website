import Spline from "@splinetool/react-spline";
import { type CSSProperties } from "react";

export default function Avatar() {
  const splineStyling: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="background-section  absolute inset-0  w-screen h-screen z-0 flex justify-center items-center">
      {/* TODO: Add lazy loading to spline component and also option to set zoom size based on screen dimension  */}
      <Spline
        style={splineStyling}
        scene="https://prod.spline.design/7Lxl2RGuyGmWBVo0/scene.splinecode"
      />
      {/* Gradient overlay at the bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-dark-green))",
        }}
      />
    </div>
  );
}
