import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="about">

      {/* HERO */}
      <section className="about__hero">
        
        <div className="about__hero-content">
          <Link to="/">Back</Link>
          <br />
          <span className="about__label">ABOUT SHOPLY</span>

          <h1>
            Modern e-commerce,
            <span> built with React.</span>
          </h1>

          <p>
            Shoply is a modern e-commerce concept created to demonstrate
            practical front-end development skills, clean UI design and
            responsive web development.
          </p>

          <a href="#project" className="about__button">
            Explore the project
          </a>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="about__project" id="project">
        <div className="about__project-image">
          <div className="about__image-placeholder">
            SHOPLY
          </div>
        </div>

        <div className="about__project-content">
          <span className="about__label">THE PROJECT</span>

          <h2>
            Built as a practical front-end project
          </h2>

          <p>
            Shoply was created as a personal project to practice and
            demonstrate modern front-end development techniques.
          </p>

          <p>
            The project focuses on reusable React components, structured
            styling, responsive layouts and a clean user experience.
          </p>

          <p>
            The goal is to create an interface that feels like a real
            commercial product while keeping the code organized and
            maintainable.
          </p>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="about__technologies">
        <div className="about__section-heading">
          <span className="about__label">TECHNOLOGY</span>

          <h2>
            Built with modern tools
          </h2>

          <p>
            The project uses technologies commonly used in modern
            front-end development.
          </p>
        </div>

        <div className="about__tech-grid">

          <div className="about__tech-card">
            <span className="about__tech-number">01</span>
            <h3>React</h3>
            <p>
              Component-based architecture for building a dynamic and
              reusable user interface.
            </p>
          </div>

          <div className="about__tech-card">
            <span className="about__tech-number">02</span>
            <h3>SCSS</h3>
            <p>
              Organized and maintainable styling using variables,
              nesting and reusable CSS structures.
            </p>
          </div>

          <div className="about__tech-card">
            <span className="about__tech-number">03</span>
            <h3>Responsive Design</h3>
            <p>
              Layouts designed to provide a consistent experience across
              desktop, tablet and mobile devices.
            </p>
          </div>

          <div className="about__tech-card">
            <span className="about__tech-number">04</span>
            <h3>JavaScript</h3>
            <p>
              Modern JavaScript is used to create interactive and
              functional parts of the application.
            </p>
          </div>

        </div>
      </section>

      {/* DEVELOPER */}
      <section className="about__developer">
        <div className="about__developer-content">
          <span className="about__label">THE DEVELOPER</span>

          <h2>
            Designed and developed as a portfolio project.
          </h2>

          <p>
            I am a front-end developer focused on building modern,
            responsive web applications with React and JavaScript.
          </p>

          <p>
            Projects like Shoply are part of my portfolio and represent
            my approach to learning through practical development,
            experimentation and building complete applications.
          </p>

          <div className="about__skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>SCSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>React Native</span>
            <span>Git</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <span className="about__label">LET'S BUILD</span>

        <h2>
          Looking for a front-end developer?
        </h2>

        <p>
          Explore the project, check the code and see how Shoply was built.
        </p>

        <a href="https://github.com/" className="about__button">
          View on GitHub
        </a>
      </section>

    </main>
  );
};

export default About;