import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const DashBoard = () => {
  return (
    <div className='flex flex-col max-w-screen-xl  w-5/6 m-auto'>
        {/* <div className="text-center h-52 max-h-fit py-5">
            <h3 className=" text-4xl xs:text-5xl"> Indeed, Allah is my Lord and your Lord, so worship Him. That is the straight path.” Ayat 51</h3>
        </div> */}
      <div className="w-full">
        {/* Nav bar goes here */}
       <Navbar/>
      </div>
      <div className="w-full">
        {/* The body comps goes here */}
        <Outlet></Outlet>
      </div>
      <div className="w-full">
        {/* Footer goes here */}
      </div>
    </div>
  )
}

export default DashBoard
