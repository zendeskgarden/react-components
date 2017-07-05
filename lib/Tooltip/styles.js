'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-tooltip-a3dcc908{position:fixed}.rc-size_medium-a3dcc908{max-width:270px}.rc-inline-a3dcc908{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tooltip":"rc-tooltip-a3dcc908 rc-c-tooltip-69e906e8 rc-c-arrow-69e906e8 rc-c-arrow-4c665e","size_medium":"rc-size_medium-a3dcc908 rc-c-tooltip--medium-69e906e8","size_large":"rc-size_large-a3dcc908 rc-c-tooltip--large-69e906e8","left":"rc-left-a3dcc908 rc-c-arrow--r-4c665e","bottom":"rc-bottom-a3dcc908 rc-c-arrow--t-4c665e","top":"rc-top-a3dcc908 rc-c-arrow--b-4c665e","right":"rc-right-a3dcc908 rc-c-arrow--l-4c665e","inline":"rc-inline-a3dcc908"}
