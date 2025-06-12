import Spline from "@splinetool/react-spline";
import { useEffect, useState, type CSSProperties } from "react";
import "./avatar.css";

export default function Avatar() {
  // const [sceneStyle, setSceneStyle] = useState<CSSProperties>({
  //   width: "100px",
  //   height: "100vh",
  // });

  // useEffect(() => {
  //   let resizeTimeout: number | undefined;
  //   const handleResize = () => {
  //     clearTimeout(resizeTimeout);
  //     resizeTimeout = window.setTimeout(() => {
  //       console.log("window.innerWidth ", window.innerWidth);
  //       console.log("window.innerHeight ", window.innerHeight);
  //       setSceneStyle((prevStyle) => ({
  //         ...prevStyle,
  //         width: `${window.innerWidth}px`,
  //       }));
  //     }, 100);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="wrapper">
      <Spline scene="https://prod.spline.design/i7LBp9hXtu6naQQL/scene.splinecode" />
    </div>
  );
}
