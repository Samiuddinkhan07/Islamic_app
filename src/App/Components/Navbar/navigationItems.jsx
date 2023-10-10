import { motion } from "framer-motion";
import { MenuItem } from "./menuItems";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const MenuList = [
  {
    Text:"Quran",
    Icon:"",
    Link:"/Quran"
  },
  {
    Text:"Hadiths",
    Icon:"",
    Link:"/Hadiths"
  },
  {
    Text:"Prayer",
    Icon:"",
    Link:"/Prayer"
  },
]

export const Navigation = ({toggle}) => (
  <motion.ul variants={variants} className="absolute w-[241px] right-0 top-[60px] p-2">
    {MenuList.map((elem,i) => (
      <MenuItem title={elem.Text} link={elem.Link} key={i} toggle={toggle}/>
    ))}
  </motion.ul>
)