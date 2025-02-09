import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Project from "@/components/Project";
import Art from "@/components/Art";
import Bio from "@/components/Bio";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Bio/>
      <About />
      <Project />
      <Art />
      <Contact />
    </div >
  );
}
