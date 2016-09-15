import React from 'react';
import RaceSelector     from './RaceSelector';

export default class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeOverlay: '' };
  }
  setOverlay = (name) => {
    this.setState({ activeOverlay: ((this.state.activeOverlay === name)? '' : name) });
  }
  render() {
    const { activeOverlay } = this.state;
    return (
      <div className="LeftNav">
        <RaceSelector
          setOverlay={this.setOverlay}
          nav="left"
          name="elves"
          activeOverlay={activeOverlay}
          top="190px" />
        <RaceSelector
          setOverlay={this.setOverlay}
          nav="left"
          name="humans"
          activeOverlay={activeOverlay}
          top="390px" />
        <RaceSelector
          setOverlay={this.setOverlay}
          nav="left"
          name="dwarves"
          activeOverlay={activeOverlay}
          top="580px" />
      </div>
    );
  }
}
