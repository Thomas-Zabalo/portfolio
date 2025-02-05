import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Project from "@/components/Project";


export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div >
  );
}
