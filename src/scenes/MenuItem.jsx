import * as React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Link = ({ page, index, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        style={{color:selectedPage === lowerCasePage ? "#FFBF00":colors[index]}}
      >
        {page}
      </AnchorLink>
    );
  };
export const MenuItem = ({ i,index,selectedPage,setSelectedPage }) => {
 
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
        <Link
        page={i}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        index={index}
        />
    </motion.li>
  );
};
