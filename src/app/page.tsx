import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Architecture from '@/components/Architecture';
import Experience from '@/components/Experience';
import Freelance from '@/components/Freelance';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Architecture />
      <Experience />
      <Freelance />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
