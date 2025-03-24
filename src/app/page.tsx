import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Project from "@/components/Project";
import Bio from "@/components/Bio";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Bio />
      <About />
      <Services />
      <Project />
      <Contact />
    </div >
  );
}
