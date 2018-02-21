import '../style/ui.scss'
import '../style/index.scss'
import '../style/globals.scss'
import Good from 'react-icons/lib/fa/thumbs-o-up'
import Badd from 'react-icons/lib/fa/thumbs-o-down'
import Calendar from 'react-icons/lib/fa/calendar'
import Win from 'react-icons/lib/fa/trophy'


const procentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}
const calcGoalProgress = (total, goal) => {
    return procentToDecimal(total/goal)
}

const FastCount = ({total=0, fast=0, breakDay=0, goal=20}) => (
            <div className="fast-day-count">
                <div className="total-days">
                
                <span>{total}</span>
                <Calendar />
                    <span>dzień</span>
                </div>
                <div className="fast-days">
                <span>{fast}</span>
                <Good />
                    <span>dni postu</span>
                </div>
                <div className="break-days">
                <span>{breakDay}</span>
                <Badd />
                    <span>dni przerwy</span>
                </div>
                <div><Win />
                    <span>{calcGoalProgress(total, goal)} progresu </span>
                    
                </div>
            </div>
        )


export default FastCount;