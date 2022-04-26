import React, {Component} from 'react';
import StrainForm from './components/strains/StrainForm';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchStrains } from './actions/strains';
import { fetchTypes } from './actions/types';
import { fetchEffects } from './actions/effects';
import Strains from './components/strains/Strains';
import Navbar from './components/Navbar';
import Home from './components/Home';

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
            <Route exact path="/strains" render={() => <Strains getStrains={this.props.fetchStrains()} />} />
            <Route exact path="/strains/new" render={({history}) => <StrainForm history={history} getTypes={this.props.fetchTypes()} getEffects={this.props.fetchEffects()} />} />
            {/* <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/strains">
              <Strains getStrains={this.props.fetchStrains()} />
            </Route>
            <Route exact path="/strains/new">
              <StrainForm getTypes={this.props.fetchTypes()} getEffects={this.props.fetchEffects()} />
            </Route> */}
          </Switch>
        </Router>
        {/* <StrainForm getTypes={this.props.fetchTypes()} getEffects={this.props.fetchEffects()} /> */}
        {/* <Strains getStrains={this.props.fetchStrains()} /> */}
      </div>
    );
  }
}

export default connect(null, {fetchStrains, fetchTypes, fetchEffects})(App);
