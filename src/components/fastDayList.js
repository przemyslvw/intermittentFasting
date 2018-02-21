import '../style/ui.scss'
import '../style/index.scss'
import '../style/globals.scss'
import Good from 'react-icons/lib/fa/thumbs-o-up'
import Badd from 'react-icons/lib/fa/thumbs-o-down'
import Calendar from 'react-icons/lib/fa/calendar'
import Win from 'react-icons/lib/fa/trophy'
import { Link } from 'react-router'
import FastDayRow from './fastDayRow'

const FastDayList = ({days, filter}) => {
    const filteredDays = (!filter || 
        !filter.match(/fastDay|breakDay/))?
        days:
        days.filter(day => day[filter]);
        
    return (
    <div className="fast-day-list">
    <table>
        <thead>
            <tr>
                <th>data</th>
                <th>typ</th>
                <th>fast day</th>
                <th>break day</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Link to="/list-day">
                        All Days
                    </Link>
                    <Link to="/list-day/fastDay">
                        Fast Days
                    </Link>
                    <Link to="/list-day/breakDay">
                        Break Days
                    </Link>
                </td>
            </tr>
        </thead>
        <tbody>
            {filteredDays.map((day, i) =>
                <FastDayRow key={i}
                            {...day}/>


            
            )}
        </tbody>

    </table>
    </div>
)
}

export default FastDayList;