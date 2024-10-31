import Header from "./components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Leadership from "../components/Leadership";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import NewsImg from "../src/assets/News.png";
import Gallery from "../components/Gallery";
import FooterPage from "../components/Footer";
import { HeroHoverImg } from "./components/HoverImg";
import ParticleRing from "../constants/Particle";
import { Model } from "./constants/Model";

function HomeScreen() {
  return (
    <section className="bg-main-bg">
      <div className="fixed w-full z-[99]">
        <Navbar />
      </div>
      <ParticleRing />
      <Banner NL={false} />
      <Leadership />
      <Banner NL={true} />
      <About />
      <Timeline />
      <Contact />
      <Gallery />
      <FooterPage />
    </section>
  );
}

export default HomeScreen;
