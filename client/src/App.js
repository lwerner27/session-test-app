import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Registration from './pages/Registration';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route path='/registration'>
                        <Registration />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
