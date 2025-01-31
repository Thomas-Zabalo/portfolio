
import About from "@/organisms/About/About";
import Hero from "@/organisms/Hero/Hero";


export default function Home() {
  return (
    <div>
      <section className="home--heading">
        <Hero />
        <About />
      </section>
    </div>
  );
}
