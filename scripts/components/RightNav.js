import React            from 'react';
import RaceSelector     from './RaceSelector';

export default class RightNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeOverlay: '' };
  }
  setOverlay = (name) => {
    this.setState({ activeOverlay: (this.state.activeOverlay === name) && '' || name });
  }
  render() {
    const { activeOverlay } = this.state;
    return (
      <div className="RightNav">
        <RaceSelector
          setOverlay={this.setOverlay}
          nav="right"
          name="orcs"
          activeOverlay={activeOverlay}
          top="190px" />
        <RaceSelector
          setOverlay={this.setOverlay}
          nav="right"
          name="darkElves"
          activeOverlay={activeOverlay}
          top="390px" />
        <RaceSelector
          setOverlay={this.setOverlay}
          nav="right"
          name="goblins"
          activeOverlay={activeOverlay}
          top="580px" />
      </div>
    );
  }
}
