import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MapSection from "./components/MapSection/MapSection";

class App extends Component {
  render() {
    return (

        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/map" component={MapSection} />
                    <Redirect from='*' to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
