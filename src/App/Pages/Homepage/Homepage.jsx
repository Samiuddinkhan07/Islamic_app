
import { Card } from "../../Components/Card/Card";
import Footer from '../../Components/Footer/Footer'
const Homepage = () => {
    const CardObj = [
        {
            img:"./Assets/hadees.jpg",
            Title:"Hadiths Hub",
            Description:"Immerse yourself in the teachings of the Prophet Muhammad (PBUH) and gain insights into the islamic way of life.Grow in charecter and virtue every single day.",
        },  {
            img:"./Assets/quran.jpg",
            Title:"Quranic Verses",
            Description:"Revel in the beauty of the holy Quran's divine verses and deepen your understanding of Islam.Discover the miraculous words of our Creator,shedding light on life's most pressing questions.",
        },
        {
            img:"./Assets/prayer timing.jpg",
            Title:"Prayer Info",
            Description:"Timely,accurate,and reliable prayer information-never miss an opportunity to converse with the Almighty and seek His infinite wiadom and blessings.",
        }
    ]
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const getTodaysDate = new Date();
    const getDate = getTodaysDate.getDate();
    const getMonth = getTodaysDate.getUTCMonth();
    const getYear = getTodaysDate.getFullYear();

  return (
    <div className="flex flex-col">
        <div className="hero-section">
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CardObj.map((elem) =>{
           return <Card title={elem.Title} description={elem.Description} img={elem.img} />
        })}
        </div>

        <Footer/>
        
    </div>
  )
}

export default Homepage
