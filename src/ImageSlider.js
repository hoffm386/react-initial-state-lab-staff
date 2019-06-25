import React, {Component, Fragment} from 'react';

export default class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return (
      <Fragment>
        I am on slide {this.state.currentSlideIndex}
      </Fragment>
    );
  }
}
