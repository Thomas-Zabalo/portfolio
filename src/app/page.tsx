import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Project from "@/components/Project";
import Bio from "@/components/Bio";
import NavBar from "@/components/NavBar";
import Parcours from "@/components/Parcours";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Bio />
      <About />
      <Parcours />
      <Services />
      <Project />
      <Contact />
    </div >
  );
}
