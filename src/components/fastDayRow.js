import Good from 'react-icons/lib/fa/thumbs-o-up'
import Badd from 'react-icons/lib/fa/thumbs-o-down'
import Calendar from 'react-icons/lib/fa/calendar'


const fastDayRow = ({type, date, fastDay, breakDay}) => (
        <tr>
            <td>
                {date}
            </td>
            <td>
                {type}
            </td>
            <td>
                {(fastDay) ? <Good/> : null}
            </td>
            <td>
                {(breakDay) ? <Badd/> : null}
            </td>
        </tr>   
);


export default fastDayRow;