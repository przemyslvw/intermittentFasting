import React from 'react'
import { Component } from 'react'
import FastDayList from './fastDayList'
import FastCount from './fastCount'
import {AddDayForm} from './AddDayForm.js'
import {Uuuuupsss404} from './Uuuuupsss.js'
import {Menu} from './Menu.js'

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            allFastDays: [
                {
                    type: "16/8",
                    date: "2018-02-17",
                    fastDay: false,
                    breakDay: true
                },
                {
                    type: "16/8",
                    date: "2018-02-18",
                    fastDay: true,
                    breakDay: false
                },
                {
                    type: "14/10",
                    date: "2018-02-19",
                    fastDay: true,
                    breakDay: false
                },
                {
                    type: "12/12",
                    date: "2018-02-20",
                    fastDay: false,
                    breakDay: true
                }
    
            ]

        }
        this.addDay = this.addDay.bind(this)
    }
    addDay(newDay) {
        //console.log(newDay)
        this.setState({
            allFastDays: [ 
            ...this.state.allFastDays,
            newDay ]
            })
    }
    countDays = (filter) => {
        const allDays = this.state.allFastDays
        return allDays.filter((day)=> (filter) ? day[filter] :
            day).length
    }
    render() {
        //console.log(this.state.allFastDays[0].fastDay)
        return (
            <div className="app">
            <Menu/>
            {(this.props.location.pathname === "/") ?
            <FastCount total={this.countDays()}
            fast={this.countDays("fastDay")}
            breakDay={this.countDays("breakDay")}/> :
            (this.props.location.pathname === "/list-day") ?
            <FastDayList days={this.state.allFastDays}
            filter={this.props.params.filter}/> :
            (this.props.location.pathname === "/add-day") ?
            <AddDayForm onNewDay={this.addDay}/> :

            
            <Uuuuupsss404/> 
            

            }   
            
            </div>
        )
    }

}


// import { FastDayList } from './fastDayList'
// import { FastCount } from './fastCount'




// const App = () => (
//             <div className="app">
                

//             </div>
//         )

export default App;