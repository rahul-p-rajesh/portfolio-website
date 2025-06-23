import { useEffect } from "react";
import Avatar from "./components/avatar/Avatar";
import BackgroundScene from "./components/avatar/Avatar";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Lenis from "lenis";
import Tech from "./components/tech/Tech";

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
    <div className="bg-[--color-dark-green] text-white px-4 mx-auto">
      {/* Children */}
      <section className="frame-container h-screen w-screen">
        <Hero />
      </section>
      <section className="frame-container min-h-fit w-screen">
        <Experience />
      </section>
      <section className="frame-container min-h-fit  w-screen">
        <Tech />
      </section>
    </div>
  );
};

export default App;
