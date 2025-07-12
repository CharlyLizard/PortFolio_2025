import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import HorizontalNav from "./components/HorizontalNav";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <div 
        id="sections-container"
        className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <section className="w-screen h-full flex-shrink-0 snap-start">
          <Hero />
        </section>
        <section className="w-screen h-full flex-shrink-0 snap-start">
          <About />
        </section>
        <section className="w-screen h-full flex-shrink-0 snap-start">
          <Projects />
        </section>
        <section className="w-screen h-full flex-shrink-0 snap-start">
          <Experience />
        </section>
        <section className="w-screen h-full flex-shrink-0 snap-start">
          <Skills />
        </section>
        <section className="w-screen h-full flex-shrink-0 snap-start">
          <Contact />
        </section>
      </div>
      <HorizontalNav />
    </main>
  );
}