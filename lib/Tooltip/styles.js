'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-tooltip-8a6ad1cd{position:fixed;pointer-events:none}.rc-size_medium-8a6ad1cd{max-width:270px}.rc-inline-8a6ad1cd{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tooltip":"rc-tooltip-8a6ad1cd rc-c-tooltip-69e906e8 rc-c-arrow-69e906e8 rc-c-arrow-69e906e8","size_medium":"rc-size_medium-8a6ad1cd rc-c-tooltip--medium-69e906e8","size_large":"rc-size_large-8a6ad1cd rc-c-tooltip--large-69e906e8","left":"rc-left-8a6ad1cd rc-c-arrow--r-4c665e","bottom":"rc-bottom-8a6ad1cd rc-c-arrow--t-4c665e","top":"rc-top-8a6ad1cd rc-c-arrow--b-4c665e","right":"rc-right-8a6ad1cd rc-c-arrow--l-4c665e","inline":"rc-inline-8a6ad1cd"}
