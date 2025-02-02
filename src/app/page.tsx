
import About from "@/organisms/About/About";
import Hero from "@/organisms/Hero/Hero";
import NavBar from "@/organisms/NavBar/NavBar";


export default function Home() {
  return (
    <div>
      <header id="header" className='fixed top-0 w-full z-50 pt-10 px-8'>
        <NavBar />
      </header>
      <Hero />
      <About />
    </div >
  );
}
