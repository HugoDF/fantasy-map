const React = require('react');

export default class Location extends React.Component {

  static contextTypes = {
       router: React.PropTypes.object
  };

  scrollPanorama(direction = 'right') {
    const scrollLeftBy = (direction === 'right') ? 500 : -500;
    return function() {
      // TODO: animate this (possibly pull jQuery in)
      document.getElementsByClassName('panorama-container')[0].scrollLeft += scrollLeftBy;
    };
  }

  render() {
    const router = this.context.router;
    document.addEventListener('keydown', function(e) {
      e = e || window.event;
      var isEscape = false;
      if ('key' in e) {
        isEscape = e.key == 'Escape';
      } else {
        isEscape = e.keyCode == 27;
      }
      if (isEscape) {
        router.replace('/locations');
      }
    });
    const locationId = this.props.params.location;
    const location = this.props.locations.find((el) => (el.id === locationId));
    return (
      <div className="Location">
        <div className="panorama-container" onDragStart={(e)=>{console.log(e)}}>
          <div className="left-arrow" onClick={this.scrollPanorama('left')}>&lt;</div>
          <img className="panorama-image" src={location.backgroundUrl}/>
          <div className="right-arrow" onClick={this.scrollPanorama('right')}>&gt;</div>
        </div>
      </div>
    )
  }
}
