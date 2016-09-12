import React, { PropTypes } from 'react';
import HoverArea            from './HoverArea';

export default class Locations extends React.Component {
  render() {
    return (
      <div className="map-image">
        <div className="Locations">
          <HoverArea
            name="ivoryKingdoms"
            width="379px"
            left="217px"
            top="144px"
            viewBox="35 97 680 775"
            strokeActive="gold" />
          <HoverArea
            name="jungle"
            width="347px"
            left="516px"
            top="358px"
            viewBox="0 350 745 450"
            strokeActive="gold" />
          <HoverArea
            name="desert"
            width="687px"
            left="373px"
            top="442px"
            viewBox="20 410 700 380"
            strokeActive="gold" />
          <HoverArea
            name="steppes"
            width="230px"
            left="383px"
            top="416px"
            viewBox="35 275 700 520"
            strokeActive="gold" />
          <HoverArea
            name="swamps"
            width="132px"
            left="707px"
            top="354px"
            viewBox="50 150 680 710"
            strokeActive="gold" />
          <HoverArea
            name="mountains"
            width="642px"
            left="501px"
            top="168px"
            viewBox="25 320 710 240"
            strokeActive="gold" />
          <HoverArea
            name="plains"
            width="498px"
            left="803px"
            top="309px"
            viewBox="10 280 725 355"
            strokeActive="gold" />
        </div>
      </div>
    );
  }
}
