import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}