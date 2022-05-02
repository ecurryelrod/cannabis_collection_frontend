import React, {Component} from 'react';
import NewStrainForm from './components/strains/NewStrainForm';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchStrains } from './actions/strains';
import { fetchTypes } from './actions/types';
import { fetchEffects } from './actions/effects';
import Strains from './components/strains/Strains';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EditStrainForm from './components/strains/EditStrainForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchEffects()
    this.props.fetchStrains()
    this.props.fetchTypes()
  }

  render() {
    // debugger
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/strains" component={Strains} />
            <Route exact path="/strains/new" component={NewStrainForm} />
            <Route exact path="/strains/:id/edit" render={props => {
              const strain = this.props.strains.find(strain => strain.id === props.match.params.id)
              // debugger
              return <EditStrainForm 
                strain={strain} 
                strainEffects={strain.attributes.effects.map(effect => effect.id.toString())} 
                strainType={strain.attributes.type.id}
                {...props} 
              />
            }} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  strains: state.strains
})

export default connect(mapStateToProps, {fetchEffects, fetchStrains, fetchTypes})(App);
