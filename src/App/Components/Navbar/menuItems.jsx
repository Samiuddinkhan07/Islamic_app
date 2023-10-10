import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

export const MenuItem = ({ title,i,link,toggle }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <Link to={link} onClick={toggle}>
      <motion.li
        variants={variants}
        whileHover={{ translateY: '-2px'}}
        className="flex flex-row p-2 cursor-pointer"
      >
        <div className="icon-placeholder" style={style} >{title}</div>
      </motion.li>
    </Link>
  );
};