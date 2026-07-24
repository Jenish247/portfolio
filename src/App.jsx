import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Research />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
