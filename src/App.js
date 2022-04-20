import React, {Component} from 'react';
// import StrainForm from './components/strains/StrainForm';
import { connect } from 'react-redux';
import { fetchStrains } from './actions/strains';
import Strains from './components/strains/Strains';

class App extends Component {
  render() {
    // debugger
    return (
      <div className="App">
        {/* <StrainForm types={this.props.types} fetchedTypes={this.props.fetchTypes} /> */}
        <Strains getStrains={this.props.fetchStrains()} />
      </div>
    );
  }
}

export default connect(null, {fetchStrains})(App);
