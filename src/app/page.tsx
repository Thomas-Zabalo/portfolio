import Footer from "@/molecules/Footer";
import Header from "@/molecules/Header";
import About from "@/organisms/About";
import Hero from "@/organisms/Hero";


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
