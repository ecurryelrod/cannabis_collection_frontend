import React, {Component} from 'react';
import NewStrainForm from './components/strains/NewStrainForm';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { fetchStrains } from './actions/strains';
// import { fetchTypes } from './actions/types';
// import { fetchEffects } from './actions/effects';
import Strains from './components/strains/Strains';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EditStrainForm from './components/strains/EditStrainForm';

class App extends Component {
  render() {
    // debugger
    return (
      <div className="App" style={{
          backgroundImage: "url(/weedPic.png)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh'
        }}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/strains" component={Strains} />
            <Route exact path="/strains/new" component={NewStrainForm} />
            <Route exact path="/strains/:id/edit" component={EditStrainForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
