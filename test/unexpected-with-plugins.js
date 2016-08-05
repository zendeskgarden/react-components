// This is the module you get if you require test/expect
import React, { Component } from 'react'
import unexpected from 'unexpected'
import unexpectedSinon from 'unexpected-sinon'
import unexpectedReact from 'unexpected-react'
import unexpectedCheck from 'unexpected-check'
import TestUtils from 'react-addons-test-utils'

const findAll = (reactElement, predicate) => {
  const result = []
  if (reactElement && predicate(reactElement)) {
    result.push(reactElement)
  }
  const children = reactElement && reactElement.props && reactElement.props.children
  if (children) {
    React.Children.forEach(children, (child) => {
      if (child !== reactElement) {
        result.push(...findAll(child, predicate))
      }
    })
  }
  return result
}

class StatelessWrapper extends Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return this.props.children
  }
}

const renderIntoDocument = (reactElement) => {
  let component = TestUtils.renderIntoDocument(reactElement)
  if (component) {
    return component
  }

  return TestUtils.renderIntoDocument(
    <StatelessWrapper>{ reactElement }</StatelessWrapper>
  )
}

module.exports = unexpected.clone()
  .use(unexpectedSinon)
  .use(unexpectedReact)
  .use(unexpectedCheck)
  .addAssertion('<ReactElement> when rendered <assertion>', (expect, subject) => {
    expect.errorMode = 'bubble'
    const renderer = TestUtils.createRenderer()
    renderer.render(subject)
    return expect.shift(renderer)
  })
  .addAssertion('<ReactElement> when deeply rendered <assertion>', (expect, subject) => {
    expect.errorMode = 'bubble'
    return expect.shift(renderIntoDocument(subject))
  })
  .addAssertion('<ReactElement> to render [exactly] [with all children] as <ReactElement>', (expect, subject, value) => {
    expect.errorMode = 'bubble'
    const renderer = TestUtils.createRenderer()
    renderer.render(subject)
    return expect(renderer, 'to have [exactly] rendered [with all children] ', value)
  })
  .addAssertion('<ReactElement> to deeply render [exactly] [with all children] as <ReactElement>', (expect, subject, value) => {
    expect.errorMode = 'bubble'
    return expect(renderIntoDocument(subject), 'to have [exactly] rendered [with all children] ', value)
  })
  .addAssertion('<ReactElement> queried for <function> <assertion>', (expect, subject, value) => {
    const renderer = TestUtils.createRenderer()
    renderer.render(subject)
    const renderOutput = renderer.getRenderOutput()
    expect.subjectOutput = (output) => {
      output.appendInspected(renderOutput)
    }
    expect.argsOutput = (output) => {
      output.jsFunctionName(value.name)
    }
    const matches = findAll(renderOutput, (e) => e.type === value)
    expect.errorMode = 'nested'
    if (matches.length > 0) {
      return expect.shift(matches[0])
    } else {
      expect.fail('Could not find component {0} in the rendered output', value.name)
    }
  })
  .addAssertion('<ReactElement> [not] to contain <ReactElement>', (expect, subject, value) => {
    return expect(renderIntoDocument(subject), '[not] to contain', value)
  })
  .addAssertion('<ReactElement> [not] to contain <function>', (expect, subject, value) => {
    const renderer = TestUtils.createRenderer()
    renderer.render(subject)
    const renderOutput = renderer.getRenderOutput()
    expect.subjectOutput = (output) => {
      output.appendInspected(renderOutput)
    }
    expect.argsOutput = (output) => {
      output.jsFunctionName(value.name)
    }
    const matches = findAll(renderOutput, (e) => e.type === value)
    expect(matches, '[!not] to be empty')
  })
