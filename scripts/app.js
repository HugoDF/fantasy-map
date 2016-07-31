const React               = require('react');
const ReactDOM            = require('react-dom');
const { Router, Route,
        IndexRoute,
        browserHistory }  = require('react-router');

const LeftNav             = require('./components/LeftNav');
const RightNav            = require('./components/RightNav');
const Location            = require('./components/Location');
const Locations           = require('./components/Locations');


const markers             = require('./data/markers.json');
const locations           = require('./data/locations.json');

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
      <Router history={browserHistory}>
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
