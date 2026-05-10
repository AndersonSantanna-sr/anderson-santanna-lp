import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/features/hero/HeroSection';
import { AboutSection } from '@/features/about/AboutSection';
import { SkillsSection } from '@/features/skills/SkillsSection';
import { AISection } from '@/features/ai/AISection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { ExperienceSection } from '@/features/experience/ExperienceSection';
import { ContactSection } from '@/features/contact/ContactSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AISection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
