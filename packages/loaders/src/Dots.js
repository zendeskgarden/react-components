/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from "react";
import PropTypes from "prop-types";

const EASE = {
  // accelerating from zero velocity
  easeInCubic: function(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
};

const KEYFRAME_1 = 0.166666667;
const KEYFRAME_2 = 0.55;
const KEYFRAME_3 = 1.166666667;
const KEYFRAME_4 = 1.333333333;
const KEYFRAME_5 = 1.533333333;
const KEYFRAME_MAX = 1.766666667;

const WIDTH = 80;
const HEIGHT = 72;
const CIRCLE_RADIUS = 9;
const VELOCITY = .05; // between -1 and 1

const MID_X = WIDTH / 2 - CIRCLE_RADIUS;
const MID_Y = HEIGHT / 2 - CIRCLE_RADIUS;
const BOTTOM = MID_Y + 5;

const x = frame => {
  let retVal;
  const _frame = frame % KEYFRAME_MAX;

  if (_frame < KEYFRAME_1) {
    return MID_X;
  } else if (_frame < KEYFRAME_2) {
    const frameValue = _frame - KEYFRAME_1;
    const frameMaximum = KEYFRAME_2 - KEYFRAME_1;
    const easeValue = EASE.easeInOutCubic(frameValue / frameMaximum);

    retVal = MID_X - easeValue * MID_X;
  } else if (_frame < KEYFRAME_4) {
    retVal = 0;
  } else {
    const frameValue = _frame - KEYFRAME_4;
    const frameMaximum = KEYFRAME_MAX - KEYFRAME_4;

    retVal = MID_X * (frameValue / frameMaximum);
  }

  if (frame >= KEYFRAME_MAX) {
    retVal = MID_X * 2 - retVal;
  }

  return retVal;
};

const y = frame => {
  const _frame = frame % KEYFRAME_MAX;

  if (_frame < KEYFRAME_1) {
    return (_frame / KEYFRAME_1) * -1 * (BOTTOM - MID_Y) + BOTTOM;
  } else if (_frame < KEYFRAME_3) {
    return MID_Y;
  } else if (_frame < KEYFRAME_4) {
    const frameValue = _frame - KEYFRAME_3;
    const frameMaximum = KEYFRAME_4 - KEYFRAME_3;

    return (frameValue / frameMaximum) * (BOTTOM - MID_Y) + MID_Y;
  } else if (_frame < KEYFRAME_5) {
    const frameValue = _frame - KEYFRAME_4;
    const frameMaximum = KEYFRAME_5 - KEYFRAME_4;
    const easeValue = EASE.easeOutCubic(frameValue / frameMaximum);

    return BOTTOM - easeValue * BOTTOM;
  } else {
    const frameValue = _frame - KEYFRAME_5;
    const frameMaximum = KEYFRAME_MAX - KEYFRAME_5;
    const easeValue = EASE.easeInCubic(frameValue / frameMaximum);

    return easeValue * BOTTOM;
  }
};

const Circle = ({ frame }) => (
  <circle
    cx={CIRCLE_RADIUS}
    cy={CIRCLE_RADIUS}
    r={CIRCLE_RADIUS}
    transform={`translate(${x(frame)} ${y(frame)})`}
    style={{ willChange: "transform" }}
  />
);

Circle.propTypes = {
  frame: PropTypes.number
};

const SVG = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={WIDTH}
    height={HEIGHT}
    focusable="false"
    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    style={{ width: "1em", height: `${HEIGHT / WIDTH}em`, fontSize: 80 }}
  >
    <g fill="currentColor">{children}</g>
  </svg>
);

SVG.propTypes = {
  children: PropTypes.node
};

export default class Dots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frame: 0,
      milliseconds: new Date()
    };
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame);
  }

  tick() {
    const milliseconds = new Date();

    this.setState(prevState => {
      const factor = 1000 + (1000 * VELOCITY);
      const elapsed = (milliseconds - prevState.milliseconds) / factor;
      const frame = prevState.frame + (elapsed % KEYFRAME_MAX);

      return { frame, milliseconds };
    });

    this.animationFrame = requestAnimationFrame(() => {
      this.tick();
    });
  }

  frame(offset) {
    const loop = KEYFRAME_MAX * 2;

    return (this.state.frame + offset * loop) % loop;
  }

  render() {
    return (
      <SVG>
        <Circle frame={this.frame(0)} />
        <Circle frame={this.frame(1 / 3)} />
        <Circle frame={this.frame(2 / 3)} />
      </SVG>
    );
  }
}
