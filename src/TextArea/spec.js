import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'
import TestUtils from 'react-addons-test-utils'
import { findDOMNode } from 'react-dom'

import TextArea from './'
import View from '../core/View'

describe('TextArea', () => {
  it('renders TextArea.Core input with styling', () => {
    expect(
      <TextArea />,
      'to render as',
      <View className='txt'>
        <TextArea.Core />
      </View>
    )
  })

  describe('with the resizable flag', () => {
    it('renders a resizable text area', () => {
      expect(
        <TextArea resizable />,
        'to render as',
        <View className='txt'>
          <TextArea.Core className='input resizable' />
        </View>
      )
    })
  })

  describe('with a label', () => {
    it('renders a label above the input', () => {
      expect(
        <TextArea label='This is a label' value='' />,
        'to deeply render as',
        <View>
          <label>This is a label</label>
          <textarea value='' />
        </View>
      )
    })
  })

  describe('with a hint', () => {
    it('renders a hint below the input', () => {
      expect(
        <TextArea hint='This is a hint' value='' />,
        'to deeply render as',
        <View>
          <textarea value='' />
          <small className='hint'>This is a hint</small>
        </View>
      )
    })
  })

  describe('when disabled', () => {
    it('renders a disabled text area', () => {
      expect(
        <TextArea disabled />,
        'to deeply render as',
        <View>
          <textarea disabled />
        </View>
      )
    })
  })

  const validations = ['error', 'warning', 'success']

  validations.forEach((validation) => {
    describe(`when given a ${validation} validation`, () => {
      it('renders a text area with the given validation', () => {
        expect(
          <TextArea validation={validation} />,
          'to render as',
          <View className={`txt ${validation}`} />
        )
      })
    })
  })

  describe('with an id', () => {
    it('uses the id for the input and wires the label to it', () => {
      expect(
        <TextArea
          id='my-id'
          label='This is a label'
          value=''
        />,
        'to deeply render as',
        <View>
          <label htmlFor='my-id'>This is a label</label>
          <textarea value='' />
        </View>
      )
    })
  })
})

describe('TextArea.Core', () => {
  it('renders text area without styling', () => {
    expect(
      <TextArea.Core />,
      'to render as',
      <textarea />
    )
  })

  it('renders text area with autoComplete value', () => {
    expect(
      <TextArea.Core autoComplete='on' />,
      'to render as',
      <textarea autoComplete='on' />
    )
  })

  it('renders text area with autoFocus value', () => {
    expect(
      <TextArea.Core autoFocus />,
      'to render as',
      <textarea autoFocus />
    )
  })

  it('renders text area with className value', () => {
    expect(
      <TextArea.Core className='foo' />,
      'to render as',
      <textarea className='foo' />
    )
  })

  it('renders text area with testId value', () => {
    expect(
      <TextArea.Core testId='foo' />,
      'to render as',
      <textarea data-test-id='foo' />
    )
  })

  it('renders text area with dir value', () => {
    expect(
      <TextArea.Core dir='rtl' />,
      'to render as',
      <textarea dir='rtl' />
    )
  })

  it('renders text area with name value', () => {
    expect(
      <TextArea.Core name='foo' />,
      'to render as',
      <textarea name='foo' />
    )
  })

  it('renders text area with maxLength value', () => {
    expect(
      <TextArea.Core maxLength={10} />,
      'to render as',
      <textarea maxLength={10} />
    )
  })

  it('renders text area with placeholder value', () => {
    expect(
      <TextArea.Core placeholder='foo' />,
      'to render as',
      <textarea placeholder='foo' />
    )
  })

  it('renders text area with tabIndex value', () => {
    expect(
      <TextArea.Core tabIndex='foo' />,
      'to render as',
      <textarea tabIndex='foo' />
    )
  })

  it('renders text area with value', () => {
    expect(
      <TextArea.Core value='foo' />,
      'to render as',
      <textarea value='foo' />
    )
  })

  describe('when changing the text', () => {
    it('onChangeText is called', () => {
      const onChangeText = sinon.spy()

      return expect(
        <TextArea.Core onChangeText={onChangeText} />,
        'when deeply rendered',
        'with event', 'change', { target: { value: 'hello' } }, 'on', <textarea />,
      ).then(() => {
        expect(onChangeText, 'to have calls satisfying', () => {
          onChangeText('hello')
        })
      })
    })
  })

  describe('when focusing on the element', () => {
    it('onFocus is called', () => {
      const onFocus = sinon.spy()

      return expect(
        <TextArea.Core onFocus={onFocus} />,
        'when deeply rendered',
        'with event', 'focus', 'on', <textarea />,
      ).then(() => {
        expect(onFocus, 'was called times', 1)
      })
    })
  })

  describe('when un-focusing the element', () => {
    it('onBlur is called', () => {
      const onBlur = sinon.spy()

      return expect(
        <TextArea.Core onBlur={onBlur} />,
        'when deeply rendered',
        'with event', 'blur', 'on', <textarea />,
      ).then(() => {
        expect(onBlur, 'was called times', 1)
      })
    })
  })

  describe('when pressing keys on the element', () => {
    it('onKeyDown is called', () => {
      const onKeyDown = sinon.spy()

      return expect(
        <TextArea.Core onKeyDown={onKeyDown} />,
        'when deeply rendered',
        'with event', 'keyDown', 'on', <textarea />,
      ).then(() => {
        expect(onKeyDown, 'was called times', 1)
      })
    })
  })

  describe('when arrow-up is pressed key on the element', () => {
    it('onArrowUp is called', () => {
      const onArrowUp = sinon.spy()

      return expect(
        <TextArea.Core onArrowUp={onArrowUp} />,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 38 }, 'on', <textarea />,
      ).then(() => {
        expect(onArrowUp, 'was called times', 1)
      })
    })
  })

  describe('when arrow-down is pressed key on the element', () => {
    it('onArrowDown is called', () => {
      const onArrowDown = sinon.spy()

      return expect(
        <TextArea.Core onArrowDown={onArrowDown} />,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 40 }, 'on', <textarea />,
      ).then(() => {
        expect(onArrowDown, 'was called times', 1)
      })
    })
  })

  describe('when arrow-left is pressed key on the element', () => {
    it('onArrowLeft is called', () => {
      const onArrowLeft = sinon.spy()

      return expect(
        <TextArea.Core onArrowLeft={onArrowLeft} />,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 37 }, 'on', <textarea />,
      ).then(() => {
        expect(onArrowLeft, 'was called times', 1)
      })
    })
  })

  describe('when arrow-right is pressed key on the element', () => {
    it('onArrowRight is called', () => {
      const onArrowRight = sinon.spy()

      return expect(
        <TextArea.Core onArrowRight={onArrowRight} />,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 39 }, 'on', <textarea />,
      ).then(() => {
        expect(onArrowRight, 'was called times', 1)
      })
    })
  })

  describe('when delete is pressed key on the element', () => {
    it('onDelete is called', () => {
      const onDelete = sinon.spy()

      return expect(
        <TextArea.Core onDelete={onDelete} />,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 8 }, 'on', <textarea />,
      ).then(() => {
        expect(onDelete, 'was called times', 1)
      })
    })
  })

  describe('when enter is pressed key on the element', () => {
    it('onEnter is called', () => {
      const onEnter = sinon.spy()

      return expect(
        <TextArea.Core onEnter={onEnter} />,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 13 }, 'on', <textarea />,
      ).then(() => {
        expect(onEnter, 'was called times', 1)
      })
    })
  })

  describe('when escape is pressed key on the element', () => {
    it('onEscape is called', () => {
      const onEscape = sinon.spy()

      return expect(
        <TextArea.Core onEscape={onEscape} />,
        'when deeply rendered',
        'with event', 'keyDown', { keyCode: 27 }, 'on', <textarea />,
      ).then(() => {
        expect(onEscape, 'was called times', 1)
      })
    })
  })

  describe('when using it as a controlled input', () => {
    it('the defaultValue is ignored', () => {
      let node

      return expect(
        <TextArea.Core
          defaultValue='Hello'
          ref={(ref) => { node = ref }}
          value='Hi'
        />,
        'when deeply rendered',
        'with event', 'focus', 'on', <textarea />
      ).then(() => {
        expect(node.input.value, 'to equal', 'Hi')
      })
    })
  })

  describe('when using it as an uncontrolled input', () => {
    describe('when using defaultValue', () => {
      it('it is set on the DOM node', () => {
        let node

        const component = TestUtils.renderIntoDocument(
          <TextArea.Core
            defaultValue='Hello'
            ref={(ref) => { node = ref }}
          />
        )
        const input = findDOMNode(component)

        expect(input.value, 'to equal', 'Hello')
        expect(input.value, 'to equal', node.input.value)
      })
    })
  })

  describe('when changing the text', () => {
    it('the value is set on the DOM node', () => {
      let node

      const component = TestUtils.renderIntoDocument(
        <TextArea.Core
          defaultValue='Hello'
          ref={(ref) => { node = ref }}
        />
      )
      const input = findDOMNode(component)
      input.value = 'Hello world'
      TestUtils.Simulate.change(input)

      expect(node.input.value, 'to equal', input.value)
      expect(node.input.value, 'to equal', 'Hello world')
    })
  })
})
