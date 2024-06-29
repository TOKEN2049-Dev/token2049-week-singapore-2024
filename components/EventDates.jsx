import { current_date } from "@/config/constants";

const EventsDate = ({selectedDate, setSelectedDate}) => {
    function generateDateRange(currentDate=current_date, numberOfDays=7) {
        const dates = [];
        let current = new Date(currentDate);
      
        for (let i = 0; i < numberOfDays; i++) {
            const options = { weekday: 'short', day: 'numeric', month: 'short' };
            const formattedDateVal = new Intl.DateTimeFormat('en-US', options).format(current);
            const formattedDateKey = formatDate(current);
            dates.push({key: formattedDateKey, val: formattedDateVal});
            current.setDate(current.getDate() + 1);
        }
      
        return dates;
    }
      
    function formatDate(date) {
        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1);
        const day = padZero(date.getDate());
      
        return `${year}-${month}-${day}`;
    }
      
    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    const genDates = generateDateRange();

    return (  
        <div className="slider-container">
            <div className="slider-header">
                <div className="tab">
                    <button onClick={() => setSelectedDate("alldates")} className={"tablinks " + (selectedDate === "alldates"? "active":"")} data-but_id="alldates">All Dates</button>
                    {genDates.map(item => {
                        return <button onClick={() => {setSelectedDate(item.key)}} key={`${item.key}`} className={"tablinks " + (selectedDate === item.key? "active":"")} data-but_id={item.key}>{item.val}</button>
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default EventsDate;