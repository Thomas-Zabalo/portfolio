import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import NavBar from "@/components/NavBar";
import Project from "@/components/Project";
import Bio from "@/components/Bio";

export default function Home() {
  return (
    <div>
      <Bio />
      <About />
      <Services />
    </div >
  );
}
