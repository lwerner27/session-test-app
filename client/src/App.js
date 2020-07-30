import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './bulma.min.css';

import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Navbar from './components/Navbar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { burgerActive: false, dropdownActive: false };

        this.toggleBurger = this.toggleBurger.bind(this);
    }

    toggleBurger() {
        this.setState({ burgerActive: !this.state.burgerActive });
    }
    render() {
        return (
            <div className='App'>
                <Navbar
                    burgerActive={this.state.burgerActive}
                    toggleBurger={this.toggleBurger}
                />
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>
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
