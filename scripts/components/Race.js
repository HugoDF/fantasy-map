import React, { PropTypes }   from 'react';

export default class Race extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  render() {
    const { router } = this.context;
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
    const race = this.props.params.race;
    // const location = this.props.locations.find((el) => (el.id === locationId));
    const imageUrl = '$baseUrl' + `/images/${race}-panorama.jpg`;
    return (
      <div className="Race">
        <div className="panorama-container">
          <img className="panorama-image" src={imageUrl}/>
        </div>
      </div>
    );
  }
}
