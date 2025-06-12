import BackgroundScene from "./components/avatar/Avatar";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="parent-container">
      <section id="#hero">
        <Hero />
      </section>
      <section id="#experience">
        <Experience />
      </section>
      <section id="#projects">
        <Projects />
      </section>
    </div>
  );
};

export default App;
