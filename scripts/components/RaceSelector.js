import React, { PropTypes }     from 'react';

import races                    from '../data/races.json';

export default class RaceSelector extends React.Component {
  static propTypes = {
    nav: PropTypes.string,
    name: PropTypes.string
  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = { displayOverlay: (props.activeOverlay === props.name) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ displayOverlay: (nextProps.activeOverlay === nextProps.name) });
  }

  handleMouseOver = () => {
    this.props.setOverlay(this.props.name);
  }

  goToUrl(name, extension) {
    const url = `/races/${name}/${extension}`;
    return () => {
      this.context.router.push(url);
    }
  }

  render() {
    const { nav, name, top } = this.props;
    const { displayOverlay } = this.state;
    const style = { top };
    const subTypes = races[name] && races[name].subTypes;
    const overlayStyle = { top: (Number(top.replace('px', '')) - 100) + 'px'}
    return (
      <div>
        <div
          className={['RaceSelector', name, nav, displayOverlay && 'hover'].join(' ')}
          style={style}
          onClick={this.handleMouseOver} />
        { this.state.displayOverlay &&
          <div
            className={['raceOverlay', nav].join(' ')}
            style={overlayStyle}>
            {
              subTypes && subTypes.map( (extension) => {
                const image = `$baseUrl/images/${name}-${extension}.png`;
                return (
                  <img
                    onClick={this.goToUrl(name, extension)}
                    key={image}
                    className="icon"
                    src={image} />
                );
              })
            }
          </div>
        }
      </div>
    );
  }
}
