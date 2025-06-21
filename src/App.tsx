import { useEffect } from "react";
import Avatar from "./components/avatar/Avatar";
import BackgroundScene from "./components/avatar/Avatar";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className=" max-h-screen max-w-screen px-4 mx-auto">
      {/* Children */}
      <section className="frame-container h-screen w-screen">
        <Hero />
      </section>
      <section className="frame-container min-h-fit h-screen w-screen">
        <Experience />
      </section>
    </div>
  );
};

export default App;
