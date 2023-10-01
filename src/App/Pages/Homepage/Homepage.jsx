

const Homepage = () => {
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
    </div>
  )
}

export default Homepage
