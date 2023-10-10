import { useScroll,useTransform,motion } from "framer-motion"
import {useRef,useState} from 'react';
import QuranCards from "../../styles/QuranCards";
const Quran = () => {
    const targetRef = useRef(null)
    const {scrollYProgress}= useScroll({
        target:targetRef,
        offset:['end end','end start']
    });

    const opacity = useTransform(scrollYProgress,[0,0.5],[1,0]);
    const QuranPara = [
        {
            id:1,
            Arabic:"آلم",
            English:"Alif-laam-meem",
            Description:"The first Para or Juz of the Quran is Alif-laam-meem(آلم ) which has 2 Surahs the first one is Surah Al-Fatiha and another one is Al-Baqarah."

        },
        {
            id:2,
            Arabic:"سَيَقُولُ",
            English:"Sayaqūlu",
            Description:"The second Para or Juz of the Quran is Sayaqūlu (سَيَقُولُ) which have only 1 Surah that is Surah Al-Baqarah."

        },
        {
            id:3,
            Arabic:"الرُّسُلُ تِلْكَ",
            English:"Tilka ’r-Rusulu",
            Description:"The third Para or Juz of the Quran is Tilka ’r-Rusulu (الرُّسُلُ تِلْكَ) which has Surahs the first one is Surah Al-Baqarah and second is Aal-Imran"

        },{
            id:4,
            Arabic:"تَنَالُوا لَنْ",
            English:"Lan Tana Loo",
            Description:"The fourth Para or Juz of the Quran is Lan Tana Loo (تَنَالُوا لَنْ) which has 2 Surahs the first one is Surah Aal-Imran and second is An-Nisa"

        },{
            id:5,
            Arabic:"وَالْمُحْصَنَاتُ",
            English:"Wal Mohsanat",
            Description:"The Fifth Para or Juz of the Quran is Wal Mohsanat (وَالْمُحْصَنَاتُ) which have 1 Surah that is Surah is An-Nisa"
        },{
            id:6,
            Arabic:"اللَّهُ يُحِبُّ لَ",
            English:"Yuhibbullah",
            Description:"The Sixth Para or Juz of the Quran is La Yuhibbullah (اللَّهُ يُحِبُّ لَا) which has 2 Surahs the first one is Surah An-Nisa and second is Surah Al-Maidah"
        },{
            id:7,
            Arabic:"سَمِعُوا وَإِذَا",
            English:"Wa Iza Samiu",
            Description:" The Seventh Para or Juz of the Quran is Wa Iza Samiu (سَمِعُوا وَإِذَا) which has 2 Surahs the first one is Surah Al-Maidah and second is Surah Al-Anaam"
        },{
            id:8,
            Arabic:"أَنَّنَا وَلَوْ",
            English:"Wa Lau Annan",
            Description:"The eighth Para or Juz of the Quran is Wa Lau Annana (أَنَّنَا وَلَوْ) which has 2 Surahs the first one is Surah Al-Anaam and second is Surah Al-Araf.The eighth Para or Juz of the Quran is Wa Lau Annana (أَنَّنَا وَلَوْ) which has 2 Surahs the first one is Surah Al-Anaam and second is Surah Al-Araf."
        },{
            id:9,
            Arabic:"الْمَلَأُ قَالَ",
            English:"Qalal Malao",
            Description:"The Ninth Para or Juz of the Quran is Qalal Malao (الْمَلَأُ قَالَ) which has 2 Surahs the first one is Surah Al-Araf and second is Surah Al Anfal."
        },{
            id:10,
            Arabic:"وَاعْلَمُوا",
            English:"Wa A'lamu",
            Description:"The tenth Para or Juz of the Quran is Wa A'lamu (وَاعْلَمُوا) which has 2 Surahs the first one is Surah Al- Anfal and second is Surah At-taubah."
        },{
            id:11,
            Arabic:"يَعْتَذِرُونَ",
            English:"Yatazeroon",
            Description:" The eleventh Para or Juz of the Quran is Yatazeroon (يَعْتَذِرُونَ) which has 3 Surahs that are Surah At-taubah, Surah Younus and Surah Hood"
        },{
            id:12,
            Arabic:"دَابَّةٍ مِنْ وَمَا",
            English:"Wa Mamin Da'abat",
            Description:" The twelfth Para or Juz of the Quran is Wa Mamin Da'abat (دَابَّةٍ مِنْ وَمَا) which has 2 Surahs that are Surah Hood and Surah Yusuf"
        },{
            id:13,
            Arabic:"بَرِّئُوَمَا",
            English:"Wa Ma Ubrioo",
            Description:"The thirteenth Para or Juz of the Quran is Wa Ma Ubrioo (بَرِّئُوَمَا) which has 3 Surahs that are Surah Yusuf, Surah Raad, and Surah Ibrahim"
        },{
            id:14,
            Arabic:"رُبَمَا",
            English:"Rubama",
            Description:" The fourteenth Para or Juz of the Quran is Rubama (رُبَمَا) which has 2 Surahs that are Surah Hijr and Surah Nahl"
        },{
            id:15,
            Arabic:"الَّذِي سُبْحَانَ",
            English:"Subhanallazi",
            Description:"The fifteenth Para or Juz of the Quran is Subhanallazi (الَّذِي سُبْحَانَ) which has 2 Surahs that are Surah Al Isra and Surah Al-Kahf"
        },{
            id:16,
            Arabic:"أَلَمْ قَالَ",
            English:"Qal Alam",
            Description:"The Sixteenth Para or Juz of the Quran is Qal Alam (أَلَمْ قَالَ) which has 3 Surahs that are Surah Al-Kahf, Surah Maryam and Surah Taha"
        },{
            id:17,
            Arabic:"اقْتَرَبَ",
            English:"Aqtarabo",
            Description:"The Seventeenth Para or Juz of the Quran is Aqtarabo (اقْتَرَبَ) which has 2 Surahs that are Surah Al Anbiya and Surah Al-Hajj"
        },{
            id:18,
            Arabic:"أَفْلَحَ قَدْ",
            English:"Qadd Aflaha",
            Description:"The Eighteenth Para or Juz of the Quran is Qadd Aflaha (أَفْلَحَ قَدْ) which has 3 Surahs that are Surah Al Muminoon, Al-Noor, and Surah Al-Furqan"
        },{
            id:19,
            Arabic:"الَّذِينَ وَقَالَ",
            English:"Wa Qalallazina",
            Description:"The Nineteenth Para or Juz of the Quran is Wa Qalallazina (الَّذِينَ وَقَالَ) which has 3 Surahs that are Surah Al Furqan, Al-Shu’ara, and Surah Al Namal."
        },{
            id:20,
            Arabic:"خَلَقَ أَمَّنْ",
            English:"A'man Khalaq",
            Description:"The twentieth Para or Juz of the Quran is A'man Khalaq (خَلَقَ أَمَّنْ) which has 3 Surahs that Surah Al Namal, Al-Qasas, and Surah Al-Ankaboot"
        },{
            id:21,
            Arabic:"أُوحِيَ مَا اتْلُ",
            English:"Utlu Ma Oohi",
            Description:"The twenty-one Para or Juz of the Quran is Utlu Ma Oohi (أُوحِيَ مَا اتْلُ) which has 4 Surahs from Surah Ar-Room to Surah Al-Ahzab"
        },{
            id:22,
            Arabic:"يَقْنُتْ وَمَنْ",
            English:"Wa Manyaqnut",
            Description:"The twenty-two Para or Juz of the Quran is Wa Manyaqnut (يَقْنُتْ وَمَنْ) which has 4 Surahs from Surah Al Ahzab to Surah Yaseen"
        },{
            id:23,
            Arabic:"لِيَ وَمَا",
            English:"Wa Mali",
            Description:"The twenty-three Para or Juz of the Quran is Wa Mali (لِيَ وَمَا) which has 4 Surahs from Surah Yaseen to Surah Al-Zumar"
        },{
            id:24,
            Arabic:"أَظْلَمُ فَمَنْ",
            English:"Faman Azlam",
            Description:"The twenty-four Para or Juz of the Quran is Faman Azlam (أَظْلَمُ فَمَنْ) which has 3 Surahs from Surah Al-Zumar to Surah Fussilat"
        },{
            id:25,
            Arabic:"يُرَدُّ إِلَيْهِ",
            English:"Elahe Yuruddo",
            Description:"The twenty-five Para or Juz of the Quran is Elahe Yuruddo (يُرَدُّ إِلَيْهِ) which has 5 Surahs from Surah Fussilat to Surah Al-Jathiy"
        },{
            id:26,
            Arabic:"حم",
            English:"Ha'a Meem",
            Description:"The twenty-six Para or Juz of the Quran is Ha'a Meem (حم) which has 5 Surahs from Surah Ahqaf to Surah qaaf"
        },{
            id:27,
            Arabic:"خَطْبُكُمْ فَمَا قَال",
            English:"Qala Fama Khatbukum",
            Description:"The twenty-seven Para or Juz of the Quran is Qala Fama Khatbukum (خَطْبُكُمْ فَمَا قَال) which has 7 Surahs from Surah Dhariyaat to Surah Al-Hadid"
        },{
            id:28,
            Arabic:"اللَّهُ سَمِعَ قَدْ",
            English:"Qadd Sami Allah",
            Description:"The twenty-eight Para or Juz of the Quran is Qadd Sami Allah (اللَّهُ سَمِعَ قَدْ) which has 9 from Surah Mujadilah to Surah Al-Tahrim"
        },{
            id:29,
            Arabic:"الَّذِي تَبَارَكَ",
            English:"Tabarakallazi",
            Description:"The twenty-nine Para or Juz of the Quran is Tabarakallazi (الَّذِي تَبَارَكَ) which has 11 Surahs from Surah Al-Mulk to Surah Al-Mursalat"
        },{
            id:30,
            Arabic:"يَتَسَاءَلُونَ عَمَّ",
            English:"Amma Yatasa'aloon",
            Description:"The thirty Para or Juz of the Quran is Amma Yatasa'aloon (يَتَسَاءَلُونَ عَمَّ) which has 37 Surahs from Surah An Naba to Surah An-Nas"
        },
    ]
    const [QuranNames,setQuranNames] = useState(QuranPara);
    const [filterQuranNames,setFilterQuran] = useState(QuranPara);

    const handlerInputChange = (searchedTerm) =>{
       const filterItems = QuranNames.filter((names) =>{
            return names.Arabic.toLowerCase().includes(searchedTerm.toLowerCase()) || names.English.toLowerCase().includes(searchedTerm.toLowerCase())
       });
       setFilterQuran(filterItems);
    }
  return (
    <div className="Quran-section">
        <div className="Quran-Quote_Header bg-[#B1A7A6] my-20 rounded-sm">
            <h1 className="md:text-4xl text-2xl text-[#21272C] py-20 md:text-center">“The month of Ramadan [is that] in which was revealed the Quran, a guidance for the people and clear proofs of guidance and criterion.” [2:185]</h1>
        </div>
       <div className="search-Quran my-9 text-center relative">
        <input type="text" id="floating_filled" className="block bg-[#21272C] focus:border-[#B1A7A6]  w-2/4 m-auto  rounded-md  peer" placeholder=" " onChange={(e) =>handlerInputChange(e.target.value)}/>
        <label htmlFor="floating_filled" className="absolute  duration-300 transform -translate-y-5 scale-75 top-4 z-10 origin-[0] left-[26%] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:bg-[#21272C]">Search</label>
       </div>
        <div className="Quran-card-section grid grid-cols-1 md:grid-cols-4 gap-3">
            {filterQuranNames.map((elem,i) =>{
                return <QuranCards key={i} number={elem.id} titleArabic={elem.Arabic} titleEnglish={elem.English} description={elem.Description}/>
            })}
        </div>
    </div>
  )
}

export default Quran
