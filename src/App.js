import React, {Component} from 'react';
// import StrainForm from './components/strains/StrainForm';
import { connect } from 'react-redux';
import { fetchStrains } from './actions/strains';

class App extends Component {
  render() {
    // debugger
    return (
      <div className="App">
        {/* <StrainForm types={this.props.types} fetchedTypes={this.props.fetchTypes} /> */}
      </div>
    );
  }
}

export default connect(null, {fetchStrains})(App);
