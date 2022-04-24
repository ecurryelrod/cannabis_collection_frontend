import React, {Component} from 'react';
import StrainForm from './components/strains/StrainForm';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchStrains } from './actions/strains';
import { fetchTypes } from './actions/types';
import { fetchEffects } from './actions/effects';
import Strains from './components/strains/Strains';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    // debugger
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/strains">
            <Strains getStrains={this.props.fetchStrains()} />
          </Route>
        </Router>
        <StrainForm getTypes={this.props.fetchTypes()} getEffects={this.props.fetchEffects()} />
        {/* <Strains getStrains={this.props.fetchStrains()} /> */}
      </div>
    );
  }
}

export default connect(null, {fetchStrains, fetchTypes, fetchEffects})(App);
