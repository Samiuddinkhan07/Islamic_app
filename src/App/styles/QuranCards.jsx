import { Card } from "flowbite-react"

const QuranCards = ({titleArabic,titleEnglish,description,number}) => {
  return (
    <Card className="bg-[#B1A7A6] border-[transparent] cursor-pointer hover:-translate-y-1 transition-all">
      <h3 className="text-[#21272C] text-4xl md:text-5xl">{titleArabic}</h3>
      <h6 className="text-[#21272C] md:text-2xl">{number}.{titleEnglish}</h6>
      <p className="text-black first-letter:text-2xl line-clamp-3">
        {description}
      </p>
    </Card>
  )
}

export default QuranCards
