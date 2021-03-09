import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import { UserState, UseStateArray } from './Components/UserState/UserState'

const App = () => {
    return (
        <React.Fragment>
            <UserState></UserState>
            <UseStateArray></UseStateArray>
        </React.Fragment>
    )
}

ReactDom.render(<App />, document.getElementById('root'))