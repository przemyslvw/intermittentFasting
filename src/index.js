import React from 'react'
import { render } from 'react-dom'
import FastDayList from './components/fastDayList.js'
import App from './components/App.js'
import { Router, Route, hashHistory } from 'react-router'
import {Uuuuupsss404} from './components/Uuuuupsss.js'
import {AddDayForm} from './components/AddDayForm.js'

window.React = React

render( 
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="list-day" component={App}/>
            <Route path="list-day/:filter" component={App}>
        </Route>
        <Route path="add-day" component={App}/>
        <Route path="*" component={App}/>
    </Router>,

    // <FastCount total={40}
    //             fast={30}
    //             breakDay={10}
    //             goal={100}/>,

    document.getElementById('react-container')
)