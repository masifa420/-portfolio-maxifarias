"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { profile } from "@/data/profile";
import Hero from "./Hero";
import Philosophy from "./Philosophy";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Training from "./Training";
import Human from "./Human";
import Competencies from "./Competencies";
import Contact from "./Contact";
import Footer from "./Footer";

export default function PortfolioContent() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const skills = profile.skills.map((group) => ({
    ...group,
    category: t.skills.categories[group.category] ?? group.category,
  }));

  const experience = profile.experience.map((job, i) => ({
    ...job,
    type: t.experience.jobs[i]?.type ?? job.type,
    period: t.experience.jobs[i]?.period ?? job.period,
    bullets: t.experience.jobs[i]?.bullets ?? job.bullets,
  }));

  return (
    <>
      <Hero
        profile={{
          name: profile.name,
          title: profile.title,
          subtitle: t.hero.subtitle,
          location: profile.location,
          email: profile.email,
          linkedin: profile.linkedin,
        }}
        hook={t.hero.hook}
        stats={t.hero.stats}
      />
      <Philosophy
        label={t.philosophy.label}
        heading={t.philosophy.heading}
        cards={t.philosophy.cards}
      />
      <Human
        label={t.human.label}
        heading={t.human.heading}
        body={t.human.body}
      />
      <About
        label={t.about.label}
        heading={t.about.heading}
        summary={t.about.summary}
      />
      <Skills
        label={t.skills.label}
        heading={t.skills.heading}
        skills={skills}
      />
      <Experience
        label={t.experience.label}
        heading={t.experience.heading}
        company={profile.experience[0].company}
        experience={experience}
      />
      <Training
        label={t.training.label}
        heading={t.training.heading}
        badgeInProgress={t.training.badgeInProgress}
        certifications={t.training.groups}
      />
      <Competencies
        label={t.competencies.label}
        heading={t.competencies.heading}
        languagesLabel={t.competencies.languagesLabel}
        competencies={t.competencies.items}
        languages={t.competencies.languages}
      />
      <Contact
        label={t.contact.label}
        heading={t.contact.heading}
        blurb={t.contact.blurb}
        email={profile.email}
        linkedin={profile.linkedin}
      />
      <Footer
        name={profile.name}
        role={t.footer.role}
      />
    </>
  );
}
