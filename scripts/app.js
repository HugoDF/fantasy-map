import React                from 'react';
import ReactDOM             from 'react-dom';
import { Router,
         Route,
         IndexRoute,
         hashHistory }      from 'react-router';

import Map                  from './components/Map';
import Location             from './components/Location';
import Locations            from './components/Locations';
import Race                 from './components/Race';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Map}>
          <IndexRoute component={Locations} />
          <Route path="/locations" component={Locations} />
          <Route path="/locations/:location" component={Location} />
          <Route path="/races/:race/:subrace" component={Race} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('map'));
