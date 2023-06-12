import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Experience, PageInfo, Social } from "typings";

async function getPageInfo(): Promise<PageInfo> {
  const pageInfo: PageInfo[] = await client.fetch(groq`
    *[_type == "pageInfo"]
  `);
  return pageInfo[0];
}

async function getSocials(): Promise<Social[]> {
  const socials: Social[] = await client.fetch(groq`
  *[_type == "social"]
`);
  return socials;
}

async function getExperience(): Promise<Experience[]> {
  const experiences: Experience[] = await client.fetch(groq`
  *[_type == "experience"]{
    company,
    companyImage,
    isCurrentlyWorkingHere,
    jobTitle,
    dateStarted,
    dateEnded,
    points,
    technologies[]->
}
`);
  return experiences;
}

async function getSkills(): Promise<Social[]> {
  const socials: Social[] = await client.fetch(groq`
  *[_type == "social"]
`);
  return socials;
}

const Home = async () => {
  const pageInfo = await getPageInfo();
  const socials = await getSocials();
  const experiences = await getExperience();

  return (
    <main
      className="z-0 snap-y snap-mandatory overflow-y-scroll h-screen overflow-x-hidden scroll-smooth 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
