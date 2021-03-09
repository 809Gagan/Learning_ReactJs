import React from 'react';
import ReactDom from 'react-dom';
import { UserState } from './Components/UserState/UserState'

const App = () => {
    return <UserState></UserState>
}

ReactDom.render(<App />, document.getElementById('root'))