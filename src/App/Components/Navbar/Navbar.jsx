import { Navbar } from "flowbite-react"
const NavbarHeader = () => {
    return (
        <Navbar
        fluid
        rounded
        className="bg-transparent py-3 px-0 sm:px-0"
      >
        <Navbar.Brand
        >
          <h6 className="self-center whitespace-nowrap text-xl font-semibold xl:font-xl">
            Islamic Verse
          </h6>
        </Navbar.Brand>
        <Navbar.Toggle  className="bg-transparent text-black hover:bg-transparent"/>
        <Navbar.Collapse>
          <Navbar.Link
            active
            href="#"
          >
            <p>
              Home
            </p>
          </Navbar.Link>
          <Navbar.Link
            href="#" className="hover:bg-red-500"
          >
            <p>
              About
            </p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavbarHeader;
