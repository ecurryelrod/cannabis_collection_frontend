import React, {Component} from 'react';
import StrainForm from './components/strains/StrainForm';
import { connect } from 'react-redux';
import { fetchStrains } from './actions/strains';
import { fetchTypes } from './actions/types';
import Strains from './components/strains/Strains';

class App extends Component {
  render() {
    // debugger
    return (
      <div className="App">
        <StrainForm getTypes={this.props.fetchTypes()} />
        <Strains getStrains={this.props.fetchStrains()} />
      </div>
    );
  }
}

export default connect(null, {fetchStrains, fetchTypes})(App);
