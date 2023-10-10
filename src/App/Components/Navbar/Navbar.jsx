import { Navbar } from "flowbite-react";
import {motion,useCycle} from 'framer-motion';
import { useRef } from "react";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigationItems";
const NavbarHeader = () => {

  const sidebar = {
    open: (height = 800) => ({
      clipPath: `circle(${height * 3 + 400}vh at 40px 40px)`,
      transition: {
        type: "spring",
        delay:"0.1",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(0px at 36px 32px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }
  const [isOpen,isClosed] = useCycle(false,true);
  const sidenav = useRef(null)
  const height = "100%"
    return (
        <><Navbar
        fluid
        rounded
        className="bg-transparent py-3 px-0 sm:px-0 relative"
      >
        <Navbar.Brand
        >
          <h6 className="self-center whitespace-nowrap text-xl font-semibold xl:font-xl">
            Islamic Verse
          </h6>
        </Navbar.Brand>
      </Navbar>
      <motion.nav
          initial={false}
          animate={isOpen ? "open":"closed"}
          custom={height}
          ref={sidenav}
          className="absolute top-0 right-0 bottom-0 w-[253px] "
        >
          <motion.div  className="background absolute top-0 w-[253px] right-0 border-l-[] bottom-0 bg-[#B1A7A6]" variants={sidebar}/>
          <Navigation toggle={() => isClosed()}/>
          <MenuToggle toggle={()=> isClosed()}/>
        </motion.nav>
      
      </>
    )
}

export default NavbarHeader;
