import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navBar';
import JoiForm from './components/pages/joiValidation';
import BasicForm from './components/pages/basicValidation';
import { Route, Switch } from 'react-router';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
        <div className="content">
          <Switch>

            <Route path="/basic-validation" component={BasicForm} />
            <Route path="/joi-validation" component={JoiForm} />

          </Switch>
        </div>
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;
