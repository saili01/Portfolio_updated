import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Experience = () => {
  return (
    <section id="experience" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Work Experience
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Let me take you to a tour of my work experiences so far
        </p>
      </motion.div>
      <VerticalTimeline>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="2021 - present"
      iconStyle={{ background: 'rgb(220 68 146)', color: '#fff' }}
      icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
    }
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#fff'}}>Lead Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Persistent Systems, Pune</h4>
    <p>
    I implemented user interface of Billing and Payment systems for a supply chain managemement company. I helped the team with strategic consult on the product development roadmap. I managed and led team of developers. I made code reviews to identify issues before they translate into technical debt. I helped developers with best practices and leverage tooling to speed up the development process and ensure code quality. 
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2019 - 2021"
      contentStyle={{ background: 'rgb(253 204 73)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(253 204 73)' }}
      iconStyle={{ background: 'rgb(220 68 146)', color: '#fff' }}
      icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>}
    >
    <h3 className="vertical-timeline-element-title" style={{color:'#fff'}}>Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Media.net, Mumbai</h4>
    <p>
    Developed highly responsive user interface components using React for the company's website, landing pages and emailers.
    </p>
   </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2017 - 2019"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'rgb(220 68 146)', color: '#fff' }}
      icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
      }
      >
      <h3 className="vertical-timeline-element-title" style={{color:'#fff'}}>Systems Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">Infosys Ltd, Pune</h4>
      <p>
        User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
    </section>
  );
};

export default Experience;
