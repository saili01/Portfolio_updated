import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import "./MySkills.css"

const MySkills = () => {
 
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-center mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <div className="skills-content">
          <div className="d-flex front">
              <div className="front-rib">
              <span>Front-end</span>
              </div>
              <div className="front-content">
                <div className="front-grp">
                  <h3>JavaScript</h3>
                  <ul className="grp-list">
                    <li>Single Page Application (SPA)</li>
                    <li>ES6</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Webpack</li>
                    <li>GraphQL</li>
                    <li>Redux</li>
                    <li>JQuery</li>
                    <li>Electron JS</li>
                  </ul>
                </div>
                <div className="front-grp">
                <h3 style={{marginTop:12}}>HTML & CSS</h3>
                  <ul className="grp-list">
                    <li>Responsive Websites</li>
                    <li>Tailwind</li>
                    <li>CSS-in-JS (Emotion,styled-components,Material UI)</li>
                    <li>SASS</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
          </div>
          <div className="d-flex back">
              <div className="front-rib"><span>Back-end</span></div>
              <div className="front-content back-end">
                <div className="front-grp">
                  <ul className="grp-list">
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>Mongo DB</li>
                    <li>Azure Fundamentals</li>
                    <li>Heroku</li>
                    <li>Rest APIs</li>
                  </ul>
                </div>
          </div>
          </div>
          <div className="d-flex others">
              <div className="front-rib"><span>Others</span></div>
              <div className="front-content others">
                <div className="front-grp">
                  <ul className="grp-list">
                    <li>Search Engine Optimization</li>
                    <li>Designing RESTful APIs</li>
                    <li>UI Prototyping</li>
                    <li>Figma design tool</li>
                    <li>Github</li>
                    <li>JIRA</li>
                  </ul>
                </div>
          </div>
          </div>
          </div>
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          I have worked for marketing and advertisement, big companies, and startups. I have experience working with clients and remote development teams across different time zones. With over 5 years’ experience, I know where the pitfalls are in custom web applications and website projects, and how to guide you through safely.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Process
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          My detailed, step-by-step process ensures we don’t miss crucial elements that could fail your project. With each project, before I start coding, I do an extensive road-mapping session in which I define S.M.A.R.T. (specific, measurable, attainable, relevant, time-bound) goals for the project.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Satisfaction
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          I continuously and automatically test the developed features to make sure the application behaves properly, and to catch any bugs early. One-off projects often turn into long-term business relationships, with clients enjoying ongoing guidance and support long after I’ve launched.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
