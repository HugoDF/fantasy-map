import React                from 'react';

import LeftNav              from './LeftNav';
import RightNav             from './RightNav';

import markers              from '../data/markers.json';
import locations            from '../data/locations.json';

export default class Map extends React.Component {
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
      <div className="Map" style={{height: window.innerHeight}}>
        <img src="$baseUrl/images/middle-banner.png" className="banner" />
        <LeftNav />
        <RightNav />
        {children}
      </div>
    );
  }
}
