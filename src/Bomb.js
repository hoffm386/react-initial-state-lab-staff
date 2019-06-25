import React, {Component, Fragment} from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  render() {
    return (
        <Fragment>
          {(() => {
            if (this.state.secondsLeft === 0) {
              return "Boom!";
            } else {
              return `${this.state.secondsLeft} seconds left before I go boom!`;
            }
          })() /* I think the IIFE way is easier to read */}
        </Fragment>
    );
  }
}
