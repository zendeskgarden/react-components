/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

const EASE = {
  easeInQuad: function(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
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
  },
};

const KEYFRAME_1 = 0.166666667;
const KEYFRAME_2 = 0.55;
const KEYFRAME_3 = 1.166666667;
const KEYFRAME_4 = 1.333333333;
const KEYFRAME_5 = 1.533333333;
const KEYFRAME_6 = 1.766666667;

const T_HALF = KEYFRAME_6;
const T_MAX = T_HALF * 2;

const SCALE = 0.1;

const LEFT = 0 * SCALE;
const MIDDLE = 260 * SCALE;
const RIGHT = 260 * 2 * SCALE;

const BASELINE = 226 * SCALE;
const CENTER_BOTTOM = (226 + 40) * SCALE;
const SIDE_BOTTOM = (226 + 36) * SCALE;
const TIPPY_TOP = 0 * SCALE;

const BALL_RADIUS = 150 / 2 * SCALE;

// Animation width = Ball's rightmost position plus its width
const VIEWBOX_WIDTH = RIGHT + BALL_RADIUS * 2;

// This centers the animation at the middle of the dots when they are resting
const VIEWBOX_HEIGHT = CENTER_BOTTOM * 2 + BALL_RADIUS;

const half_x = t => {
  if (t < KEYFRAME_1) {
    return MIDDLE;
  } else if (t < KEYFRAME_2) {
    // Move left, ease in & out
    return (
      EASE.easeInOutCubic((t - KEYFRAME_1) / (KEYFRAME_2 - KEYFRAME_1)) * -1 * (MIDDLE - LEFT) +
      MIDDLE
    );
  } else if (t < KEYFRAME_4) {
    return LEFT;
  } else {
    return (t - KEYFRAME_4) / (KEYFRAME_6 - KEYFRAME_4) * (MIDDLE - LEFT) + LEFT;
  }
};

const half_y = t => {
  if (t < KEYFRAME_1) {
    return t / KEYFRAME_1 * -1 * (CENTER_BOTTOM - BASELINE) + CENTER_BOTTOM;
  } else if (t < KEYFRAME_3) {
    return BASELINE;
  } else if (t < KEYFRAME_4) {
    return (t - KEYFRAME_3) / (KEYFRAME_3 - KEYFRAME_4) * -1 * (SIDE_BOTTOM - BASELINE) + BASELINE;
  } else if (t < KEYFRAME_5) {
    return (
      EASE.easeOutCubic((t - KEYFRAME_4) / (KEYFRAME_5 - KEYFRAME_4)) *
        -1 *
        (SIDE_BOTTOM - TIPPY_TOP) +
      SIDE_BOTTOM
    );
  } else {
    return (
      EASE.easeInCubic((t - KEYFRAME_5) / (KEYFRAME_6 - KEYFRAME_5)) * (CENTER_BOTTOM - TIPPY_TOP) +
      TIPPY_TOP
    );
  }
};

// if pt is 5, axis is 6, we should return 7.
const mirror = (pt, axis) => axis - pt + axis;

const x = t => (t < T_HALF ? half_x(t) : mirror(half_x(t - T_HALF), MIDDLE));
const y = t => half_y(t % T_HALF);

const Dot = ({ t }) => (
  <circle
    cx={BALL_RADIUS}
    cy={BALL_RADIUS}
    fill="currentColor"
    r={BALL_RADIUS}
    style={{ willChange: 'transform' }}
    transform={`translate(${x(t)} ${y(t)})`}
  />
);

Dot.propTypes = {
  t: PropTypes.number,
};

const SVGRenderer = ({ width, children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={Math.round(width * VIEWBOX_HEIGHT / VIEWBOX_WIDTH)}
    viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
  >
    {children}
  </svg>
);

SVGRenderer.propTypes = {
  width: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default class ThreeDotMonte extends React.Component {
  static propTypes = {
    _width: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      t: 0,
      lastTick: new Date(), // eslint-disable-line react/no-unused-state
    };
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  tick() {
    // Can change SPEED by scaling difference here
    const now = new Date();
    this.setState(prevState => {
      const nextT = (prevState.t + (now - prevState.lastTick) / 1000 / 1) % T_MAX;
      return { t: nextT, lastTick: now };
    });
    this.raf = requestAnimationFrame(() => {
      this.tick();
    });
  }

  t(offset) {
    return (this.state.t + offset * T_MAX) % T_MAX;
  }

  render() {
    return (
      <SVGRenderer width={this.props._width}>
        <Dot t={this.t(0)} />
        <Dot t={this.t(1 / 3)} />
        <Dot t={this.t(2 / 3)} />
      </SVGRenderer>
    );
  }
}
