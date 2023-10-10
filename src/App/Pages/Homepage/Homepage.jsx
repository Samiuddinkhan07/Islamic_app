import TextTransition,{presets} from "react-text-transition";
import {useState,useEffect} from 'react';

const Homepage = () => {
    const [textIndex,setTextIndex] =  useState(0);
    const textArr = ["Quran","Hadits","Prayer"]
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const getTodaysDate = new Date();
    const getDate = getTodaysDate.getDate();
    const getMonth = getTodaysDate.getUTCMonth();
    const getYear = getTodaysDate.getFullYear();

    useEffect(() =>{
        const indexInt = setInterval(() =>{
            setTextIndex(index => index+1)
        },3000)

        return () => clearTimeout(indexInt)
    },[])

  return (
    <div className="flex flex-col">
        <div className="hero-section-inner">
                <ul className="flex flex-row justify-between py-2">
                    <li>
                        <span>Enlightening Islamic Insights.</span>
                    </li>
                    <li>
                        <span>Discover Now</span>
                    </li>
                    <li>
                        <span>{`${getDate} ${monthNames[getMonth]} ${getYear}`}</span>
                    </li>
                </ul>
            </div>
        <div className="hero-section my-10">
            <div className="images-container  max-h-64 text-left md:text-center  py-10">
                <TextTransition springConfig={presets.gentle} className="big text-6xl sm:text-9xl" inline delay={300}>{`${textArr[textIndex % textArr.length]}`}</TextTransition>
            </div>
        </div>
        <div className="embrace-wisdom max-h-64 my-10 py-10">
            <h1 className="text-4xl">
                Embrace the Wisdom
            </h1>
            <div className="wisdom-text">
            <p className="sm:float-left sm:w-2/4  sm:pr-6">
                Explore the depth of Islamic knowledge with our
                carefully curated collection of Hadiths and
                Quranic Verses. Dive into the ocean of
                enlightenment, and find gems of wisdom to
                guide you on your spiritual journey.
            </p>
            <p className="sm:float-right sm:w-2/4">
            Stay connected with your faith through accurate 
            and timely Prayer Information. Don't miss a single 
            prayer, enhance your worship routine, and 
            strengthen your connection with the Almighty.
            </p>
            </div>
        </div>

        <div className="stay-updated-section">
            <h1 className="text-4xl">
            Stay Updated, Stay Connected. 
            Unlock your Connection to the 
            Divine!
            </h1>
            <div className="btns flex flex-row gap-4 my-5">
                <button className="bg-[#F5F3F4] text-[#161A1D] px-2 py-2 rounded">Join Us</button>
                <button className="bg-[#F5F3F4] text-[#161A1D] px-2 py-2 rounded">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Homepage
