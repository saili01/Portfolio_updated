import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({selectedPage,setSelectedPage}) => (
  <motion.ul variants={variants}>
    {itemIds.map((menu,index) => (
      <MenuItem i={menu} key= {index} index={index} selectedPage = {selectedPage} setSelectedPage={setSelectedPage} />
    ))}
  </motion.ul>
);

const itemIds = ['Home','Skills','Projects','Testimonials','Contact'];
