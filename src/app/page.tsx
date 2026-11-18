"use client";

import { useMemo, useState } from "react";

type ProjectCategory = "Social" | "Campaigns" | "Product" | "Analytics";

type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  imageAlt: string;
  summary: string;
  contribution: string;
  details: string[];
  className: string;
};

const projects: Project[] = [
  {
    id: "cloudly-social",
    title: "Cloudly Bangladesh",
    category: "Campaigns",
    image: "/work/cloudly-campaign.svg",
    imageAlt: "Illustrative blue and violet social campaign artwork",
    summary:
      "A month-long social content plan supporting Cloudly's Bangladesh-focused marketing.",
    contribution:
      "Content concepts, planning, and Canva-based promotional graphics.",
    details: [
      "15+ content pieces planned",
      "Two approved posters",
      "One published post",
    ],
    className: "project-card--wide",
  },
  {
    id: "product-content",
    title: "Product content & messaging",
    category: "Product",
    image: "/work/product-story.svg",
    imageAlt: "Illustrative product messaging layout with abstract interface shapes",
    summary:
      "Technology-focused content work translating product ideas into clear brand communication.",
    contribution: "Content development and support for website content structure.",
    details: [
      "Product-focused content concepts",
      "Website information architecture",
      "Customer-oriented product communication",
    ],
    className: "project-card--portrait",
  },
  {
    id: "marketing-reporting",
    title: "Campaign performance reporting",
    category: "Analytics",
    image: "/work/analytics-board.svg",
    imageAlt: "Illustrative campaign reporting board with unlabeled chart shapes",
    summary:
      "A reporting view for email campaign and sequence-level performance.",
    contribution:
      "Dashboard development and performance analysis using campaign reporting data.",
    details: [
      "Sent, open, reply, and bounce measures",
      "Product and sequence comparisons",
      "Reporting to support campaign optimization",
    ],
    className: "project-card--standard",
  },
  {
    id: "african-fashion",
    title: "African Fashion & Arts Movement",
    category: "Social",
    image: "/work/community-content.svg",
    imageAlt: "Illustrative editorial social post in warm pink and orange",
    summary:
      "Social media management and campaign support for a fashion and arts organization.",
    contribution: "Content scheduling, platform management, and communication support.",
    details: [
      "Social media content support",
      "Consistent brand communication",
      "Campaign planning and scheduling",
    ],
    className: "project-card--standard",
  },
];

const categories = ["All work", "Social", "Campaigns", "Product", "Analytics"] as const;
type FilterCategory = (typeof categories)[number];

const skillGroups = [
  {
    name: "Digital marketing",
    items: ["Social media management", "Campaign planning", "Branding", "Lead generation", "Market research"],
  },
  {
    name: "Creative & design",
    items: ["Canva", "Visual content", "Promotional graphics", "Content development"],
  },
  {
    name: "AI & marketing tools",
    items: ["ChatGPT", "AI-assisted research", "Meta Business Suite", "WordPress", "HubSpot"],
  },
  {
    name: "Marketing analytics",
    items: ["Looker Studio", "Google Analytics", "Excel", "Google Sheets", "Power BI"],
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "↓"}</span>;
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All work");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          activeCategory === "All work" || project.category === activeCategory,
      ),
    [activeCategory],
  );

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Ahadi Nur, home">
          AHADI <span>NUR.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="mailto:ahadi.nur36@gmail.com">
          Let&apos;s talk <Arrow diagonal />
        </a>
      </header>

      <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">
            Ideas into
            <br />
            <span className="headline-accent">content.</span>
            <br />
            Content into
            <br />
            <span className="headline-outline">impact.</span>
          </h1>
          <p className="hero-description">
            I create digital content, support marketing campaigns, explore
            market opportunities, and turn insights into meaningful brand
            communication.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              Explore my work <Arrow />
            </a>
            <a className="text-link" href="#about">
              More about me <Arrow diagonal />
            </a>
          </div>
          <div className="hero-tags" aria-label="Areas of focus">
            <span>Content creation</span>
            <span>Social media</span>
            <span>B2B marketing</span>
          </div>
        </div>

        <div className="hero-art-wrap">
          <div className="hero-art-caption">
            <span>CREATIVE PRACTICE</span>
            <span>DHAKA · 2026</span>
          </div>
          <div className="hero-art">
            <div className="art-index">A.N. / 01</div>
            <div className="art-shape art-shape--blue" />
            <div className="art-shape art-shape--violet" />
            <div className="art-ring" />
            <div className="art-sticker">MAKE<br />IT<br />MATTER</div>
            <div className="art-orbit-copy">IDEAS · PEOPLE · INSIGHT</div>
            <span className="art-label">A STUDY IN<br />GOOD IDEAS</span>
            <span className="illustration-stamp">ILLUSTRATIVE PREVIEW</span>
          </div>
          <div className="hero-art-footer">
            <span>Creative thinking</span>
            <span className="art-footer-line" />
            <span>grounded in insight</span>
          </div>
        </div>

        <a className="scroll-cue" href="#work">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="work-section section-pad" id="work" aria-labelledby="work-title">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <h2 id="work-title">Work that moves<br />ideas forward.</h2>
            </div>
            <p className="section-intro">
              A mix of campaign planning, product content, social storytelling,
              and the analysis behind better marketing.
            </p>
          </div>

          <div className="filter-row" role="group" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                className={`filter-button${activeCategory === category ? " is-active" : ""}`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project, index) => {
              const isExpanded = expandedProject === project.id;
              return (
                <article
                  className={`project-card ${project.className}`}
                  key={project.id}
                >
                  <div className="project-image-wrap">
                    <img
                      className="project-image"
                      src={project.image}
                      alt={project.imageAlt}
                      loading={index > 1 ? "lazy" : "eager"}
                    />
                    <span className="image-note">Illustrative preview</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-copy">
                    <div className="project-title-line">
                      <h3>{project.title}</h3>
                      <span className="project-index">0{projects.indexOf(project) + 1}</span>
                    </div>
                    <p>{project.summary}</p>
                    <button
                      className="case-toggle"
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`${project.id}-details`}
                      onClick={() =>
                        setExpandedProject(isExpanded ? null : project.id)
                      }
                    >
                      {isExpanded ? "Close case study" : "View case study"}
                      <Arrow diagonal />
                    </button>
                    {isExpanded && (
                      <div className="case-study" id={`${project.id}-details`}>
                        <p className="case-label">MY CONTRIBUTION</p>
                        <p>{project.contribution}</p>
                        <ul>
                          {project.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                        <p className="case-disclaimer">
                          Preview artwork is illustrative; original project
                          assets are not included.
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="work-note">
            Project previews are original illustrations, not screenshots of
            published work.
          </p>
        </div>
      </section>

      <section className="about-section section-pad" id="about" aria-labelledby="about-title">
        <div className="section-wrap about-layout">
          <div className="about-heading">
            <h2 id="about-title">Curiosity with<br />a point of view.</h2>
            <p className="about-quote">
              Creativity backed by research.
              <br />
              Communication guided by insight.
            </p>
          </div>
          <div className="about-body">
            <p className="about-lead">
              I&apos;m Mirza Anto Ahadi Nur, a Management Information Systems
              undergraduate at the University of Dhaka with a growing focus on
              digital marketing, content creation, and product communication.
            </p>
            <p>
              My experience spans social media management, Canva-based
              creative development, B2B marketing, market research, and
              campaign performance analysis.
            </p>
            <p>
              At Cloudly Infotech, I&apos;ve worked on marketing content for
              AI-driven products, developed social media campaigns, supported
              website content strategy, and built marketing performance
              dashboards.
            </p>
            <p>
              I enjoy combining creative thinking with analytical
              problem-solving: understanding what an audience needs,
              communicating ideas visually, and using insights to make
              marketing more effective.
            </p>
            <div className="education-line">
              <span>BASED IN</span>
              <strong>Dhaka, Bangladesh</strong>
              <span className="education-separator" aria-hidden="true" />
              <span>STUDYING</span>
              <strong>Management Information Systems</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section section-pad" aria-labelledby="experience-title">
        <div className="section-wrap experience-layout">
          <div className="experience-intro">
            <h2 id="experience-title">Learning by<br />making.</h2>
            <p>Building a broader view of marketing across industries and tools.</p>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <span className="experience-mark" aria-hidden="true" />
              <div>
                <h3>Cloudly Infotech</h3>
                <p className="experience-context">TECHNOLOGY · AI PRODUCTS</p>
                <p>
                  Social content and campaign planning, product communication,
                  website content strategy, and marketing performance analysis.
                </p>
              </div>
              <span className="experience-date">MARKETING</span>
            </article>
            <article className="experience-item">
              <span className="experience-mark experience-mark--violet" aria-hidden="true" />
              <div>
                <h3>African Fashion &amp; Arts Movement</h3>
                <p className="experience-context">FASHION · ARTS · COMMUNITY</p>
                <p>
                  Social media management, content scheduling, and campaign
                  support for consistent brand communication.
                </p>
              </div>
              <span className="experience-date">SOCIAL</span>
            </article>
            <article className="experience-item">
              <span className="experience-mark experience-mark--yellow" aria-hidden="true" />
              <div>
                <h3>Management Information Systems</h3>
                <p className="experience-context">UNIVERSITY OF DHAKA</p>
                <p>
                  An undergraduate foundation in the intersection of business,
                  information, and technology.
                </p>
              </div>
              <span className="experience-date">MIS</span>
            </article>
          </div>
        </div>
      </section>

      <section className="skills-section section-pad" id="skills" aria-labelledby="skills-title">
        <div className="section-wrap">
          <div className="section-heading skills-heading">
            <div>
              <h2 id="skills-title">Creative, connected,<br />and considered.</h2>
            </div>
            <p className="section-intro">
              A practical mix of communication, content tools, and analytics
              for thinking from first idea through to performance.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.name}>
                <span className={`skill-number skill-number--${index + 1}`}>
                  0{index + 1}
                </span>
                <h3>{group.name}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
        <div className="section-wrap contact-content">
          <h2 id="contact-title">Let&apos;s make<br /><span>ideas matter.</span></h2>
          <p className="contact-copy">
            For marketing opportunities, creative collaborations, or a good
            conversation about ideas, I&apos;d love to hear from you.
          </p>
          <div className="contact-actions">
            <a className="button button--light" href="mailto:ahadi.nur36@gmail.com">
              Email Ahadi <Arrow diagonal />
            </a>
            <a
              className="button button--outline"
              href="https://www.linkedin.com/in/ahadi-nur-m8055aan/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <Arrow diagonal />
            </a>
          </div>
          <div className="contact-bottom">
            <a href="mailto:ahadi.nur36@gmail.com">ahadi.nur36@gmail.com</a>
            <span>Dhaka, Bangladesh</span>
            <a href="https://github.com/ahadi133" target="_blank" rel="noreferrer">
              GitHub <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#home">
          AHADI <span>NUR.</span>
        </a>
        <p>Digital marketing · content · strategy</p>
        <a href="#home">Back to top ↑</a>
        <span>© 2026 Ahadi Nur</span>
      </footer>
    </main>
  );
}
