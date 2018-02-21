import '../style/ui.scss'
import '../style/index.scss'
import '../style/globals.scss'

import { PropTypes, Component } from 'react'


export const AddDayForm = ({ type, date, fastDay, breakDay, onNewDay }) => {
    

const submit = (e) => {
    e.preventDefault();
    let $type= $("#_type").val(),
    $date= $("#_date").val(),
    $fastDay= $("#_fastDay:checked").val(),
    $breakDay= $("#_breakDay:checked").val();

    console.log($type);

    if ($fastDay != $breakDay && $date != '') {
    onNewDay({
        type: $type,
        date: $date,
        fastDay: $fastDay,
        breakDay: $breakDay,
        
    })
    $("#komunikat")[0].innerHTML = `<p class ="bg-success" >dodano nowy dzień</p>`;
} else {
    $("#komunikat")[0].innerHTML = `<p class ="bg-danger" > błędnie wypełniony formularz </p>`;
}


};

    return(
        <div>
            <form onSubmit={submit} className="add-day">
                <label >Typ</label>
                <select id="_type">
                    <option>14/10</option>
                    <option>15/9</option>
                    <option>16/8</option>
                    <option>17/7</option>
                    <option>18/6</option>
                 </select>
                <label>Data</label>
                <input id="_date" type="date"/>
                <div>
                <input id="_fastDay" type="checkbox"/>
                <label htmlFor="fastDay">fast day</label>
                </div>
                <div>
                <input id="_breakDay" type="checkbox"/>
                <label htmlFor="breakDay">break day</label>
                </div>
                <button>Add day</button>
                <div id="komunikat">
                </div>
            </form>

        </div>
        )

}

    

        





// AddDayForm.PropTypes = {
//     type: PropTypes.isRequired,

// }

export default AddDayForm

