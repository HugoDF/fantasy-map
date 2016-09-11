import React                from 'react';
import ReactDOM             from 'react-dom';
import { Router,
        Route,
        IndexRoute,
        hashHistory }       from 'react-router';

import LeftNav              from './components/LeftNav';
import RightNav             from './components/RightNav';
import Location             from './components/Location';
import Locations            from './components/Locations';


import markers              from './data/markers.json';
import locations            from './data/locations.json';

class Map extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      markers,
      locations
    }
  }
  render() {
    const children = React.cloneElement(this.props.children, {...(this.state)});
    return (
      <div className="Map" style={{height: window.outerHeight}}>
        <LeftNav />
        <RightNav />
        {children}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Map}>
          <IndexRoute component={Locations} />
          <Route path="/locations" component={Locations} />
          <Route path="/locations/:location" component={Location} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('map'));
