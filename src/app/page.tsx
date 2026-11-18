import Image from "next/image";
import { workSamples, type WorkSample } from "./work-samples";

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  details: string[];
  tools?: string;
};

type SkillGroup = {
  title: string;
  skills: string[];
};

const education = {
  degree: "Bachelor of Business Administration in Management Information Systems",
  institution: "University of Dhaka",
  coursework: [
    "Marketing",
    "E-Business",
    "Business Communication",
    "Management Information Systems",
    "Project Management",
    "Decision Support Systems",
  ],
};

const featuredSamples = workSamples.filter((sample) => sample.featured);
const moreSamples = workSamples.filter((sample) => !sample.featured);

const skillGroups: SkillGroup[] = [
  {
    title: "Digital Marketing & Social Media",
    skills: [
      "Social Media Management",
      "Content Planning",
      "Digital Campaigns",
      "Brand Communication",
      "Lead Generation",
      "Audience Engagement",
      "Market Research",
    ],
  },
  {
    title: "Creative & Design Tools",
    skills: [
      "Canva",
      "Social Media Graphics",
      "Promotional Creatives",
      "Product Marketing Visuals",
      "Visual Content Development",
    ],
  },
  {
    title: "Marketing & AI Tools",
    skills: [
      "ChatGPT",
      "AI-Assisted Content Creation",
      "Meta Business Suite",
      "Google Analytics",
      "WordPress",
      "HubSpot",
      "Apollo",
    ],
  },
  {
    title: "Analytics & Productivity",
    skills: [
      "Microsoft Excel",
      "Google Sheets",
      "Looker Studio",
      "Power BI",
      "Microsoft PowerPoint",
      "Google Workspace",
      "Reporting & Documentation",
    ],
  },
];

const experiences: Experience[] = [
  {
    id: "cloudly",
    company: "Cloudly Infotech Limited",
    role: "Marketing Intern",
    period: "1 Sep 2026–Present · On-site, Dhaka",
    details: [
      "Created 15+ promotional, product, and social content pieces in Canva; planned a month-long Bangladesh content calendar and campaign concepts.",
      "Supported product positioning, website content, and SEO strategy for AI-driven solutions.",
      "Contributed to B2B outreach and lead generation through market and competitor research.",
      "Built auto-refreshing Looker Studio dashboards to track email campaign performance and identify optimization opportunities.",
      "Used AI tools for content research, creative ideation, market intelligence, and workflow development.",
    ],
    tools:
      "Canva · Apollo · HubSpot · Looker Studio · Excel · Google Sheets · ChatGPT",
  },
  {
    id: "afam",
    company: "African Fashion and Arts Movement",
    role: "Social Media Manager",
    period: "Aug 2021–Nov 2021 · 4 months · Remote (Contractual)",
    details: [
      "Managed social content and communication across digital platforms.",
      "Planned and coordinated content schedules for consistent brand communication.",
      "Supported social campaigns, branding, audience engagement, and online visibility.",
    ],
  },
];

function WorkGrid({ samples }: { samples: WorkSample[] }) {
  return (
    <div className="work-grid">
      {samples.map((sample) => (
        <figure className="work-card" key={sample.src}>
          <a
            className="work-image-link"
            href={sample.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open full-size image: ${sample.caption}`}
          >
            <Image
              src={sample.src}
              alt={sample.alt}
              width={sample.width}
              height={sample.height}
              sizes="(max-width: 380px) 48vw, (max-width: 700px) 44vw, (max-width: 1000px) 30vw, 22vw"
            />
          </a>
          <figcaption>
            <span className="work-collection">{sample.collection}</span>
            <span>{sample.caption}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="home">
      <header className="site-header section-wrap">
        <a className="wordmark" href="#home">
          Mirza Anto Ahadi Nur
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#work">My Works</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">
              Marketing,
              <br />
              <span>made useful.</span>
            </h1>
            <p className="hero-description">
              I work across B2B research, digital content, and campaign
              reporting to help teams communicate clearly and make informed
              decisions.
            </p>
            <p className="hero-location">Dhaka, Bangladesh</p>
          </div>
          <figure className="hero-portrait">
            <Image
              src="/profile-dp.png"
              alt="Portrait of Mirza Anto Ahadi Nur"
              width={1254}
              height={1254}
              sizes="(max-width: 700px) 65vw, (max-width: 1000px) 38vw, 22rem"
              preload
            />
          </figure>
        </div>
      </section>

      <section
        className="education-section section-wrap"
        id="education"
        aria-labelledby="education-title"
      >
        <h2 id="education-title">Education</h2>
        <article className="education-item">
          <div className="education-heading">
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
          </div>
          <div className="education-coursework">
            <h3>Relevant Coursework</h3>
            <ul className="skill-list">
              {education.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section
        className="experience-section section-wrap"
        id="experience"
        aria-labelledby="experience-title"
      >
        <h2 id="experience-title">Experience</h2>
        {experiences.map((experience) => (
          <article
            className="experience-item"
            key={experience.id}
            aria-labelledby={`${experience.id}-title`}
          >
            <div className="experience-heading">
              <h3 id={`${experience.id}-title`}>{experience.company}</h3>
              <p className="experience-role">{experience.role}</p>
              <p className="experience-period">{experience.period}</p>
            </div>
            <div className="experience-content">
              <ul>
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {experience.tools && (
                <p className="experience-tools">
                  <strong>Tools</strong> {experience.tools}
                </p>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
        <h2 id="work-title">My Works</h2>
        <WorkGrid samples={featuredSamples} />
        {moreSamples.length > 0 && (
          <details className="work-reveal">
            <summary>
              <span className="work-more-label">See more work</span>
              <span className="work-less-label">Show less</span>
              <span className="work-reveal-icon" aria-hidden="true">
                +
              </span>
            </summary>
            <WorkGrid samples={moreSamples} />
          </details>
        )}
      </section>

      <section
        className="skills-section section-wrap"
        id="skills"
        aria-labelledby="skills-title"
      >
        <h2 id="skills-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="contact-section section-wrap" id="contact">
        <h2>Let&apos;s talk.</h2>
        <div className="contact-links">
          <a href="mailto:ahadi.nur36@gmail.com">ahadi.nur36@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/ahadi-nur-m8055aan/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href="https://github.com/ahadi133" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
