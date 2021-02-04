import './assets/css/global.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Join}/>
                <Route path='/chat' exact component={Chat}/>
            </Switch>
        </Router>
    );
}

export default App;