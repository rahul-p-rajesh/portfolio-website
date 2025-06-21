import Avatar from "./components/avatar/Avatar";
import BackgroundScene from "./components/avatar/Avatar";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className=" max-h-screen max-w-screen px-4 mx-auto">
      {/* Children */}
      <section className="h-screen w-screen">
        <Hero />
      </section>
      <section className="h-full w-full">
        <Experience />
      </section>
    </div>
  );
};

export default App;
