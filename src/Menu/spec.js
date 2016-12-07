import React from 'react'
import unexpected from 'test/expect'
import sinon from 'sinon'
import Menu from './'
import View from '../core/View'
import Button from '../Button'
import RelativePositionedPopup from '../core/RelativePositionedPopup'

describe('Menu', () => {
  const expect = unexpected.clone()
    .addAssertion('<ReactElement> when clicking on the trigger <assertion>', (expect, subject) => (
      expect(
        subject,
        'when deeply rendered',
        'with event', 'click', 'on',
        <Button>trigger</Button>
      ).then((subject) => (
        expect.shift(subject)
      ))
    ))

  describe('with menu items', () => {
    it('renders a menu containing the items', () => (
      expect(
        <Menu
          trigger={ <Button>trigger</Button> }
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when clicking on the trigger',
        'to contain',
        <View>
          <View className='item'>One</View>
          <View className='item'>Two</View>
          <View className='item'>Three</View>
        </View>
      )
    ))
  })

  describe('when clicking on the trigger the menu becomes visible', () => {
    it('renders a menu that is not hidden', () => (
      expect(
        <Menu
          trigger={ <Button>trigger</Button> }
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when clicking on the trigger',
        'to contain',
        <View className='popup' hidden={ false }/>
      )
    ))
  })

  describe('when specifying margins', () => {
    it('the margins are delegated to the popup', () => (
      expect(
        <Menu
          trigger={ <Button>trigger</Button> }
          marginBottom={0}
          marginLeft={0}
          marginRight={0}
          marginTop={0}
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when clicking on the trigger',
        'to contain',
        <RelativePositionedPopup
          hidden={false}
          marginBottom={0}
          marginLeft={0}
          marginRight={0}
          marginTop={0}
        >
          { (position) => {} }
        </RelativePositionedPopup>
      )
    ))
  })

  describe('a separator', () => {
    it('renders a menu containing a separator', () => (
      expect(
        <Menu
          trigger={ <Button>trigger</Button> }
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Separator/>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when clicking on the trigger',
        'to contain',
        <View>
          <View className='item'>One</View>
          <View className='item'>Two</View>
          <View className='separator'/>
          <View className='item'>Three</View>
        </View>
      )
    ))
  })

  describe('with arrows enabled', () => {
    it('renders an menu with an arrow', () => (
      expect(
        <Menu
          arrow
          positioning='bottom'
          trigger={ <Button>trigger</Button> }
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Separator/>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when clicking on the trigger',
        'to contain',
        <View className='menu arrow_top' role='menu'/>
      )
    ))
  })

  describe('given a size', () => {
    it('renders a menu with that size', () => (
      expect(
        <Menu
          size='large'
          trigger={ <Button>trigger</Button> }
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Separator/>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when clicking on the trigger',
        'to contain',
        <View
          className='menu size_large'
          role='menu'
        />
      )
    ))
  })

  describe('with a max height', () => {
    describe('that is a number', () => {
      it('makes the item list scrollable and set a max height', () => {
        expect(
          <Menu
            trigger={ <Button>trigger</Button> }
            maxHeight={ 150 }
          >
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
            <Menu.Item>Three</Menu.Item>
          </Menu>,
          'when clicking on the trigger',
          'to contain',
          <View className='scrollable' style={{ maxHeight: '150px' }}>
            <View className='item'>One</View>
            <View className='item'>Two</View>
            <View className='item'>Three</View>
          </View>
        )
      })
    })

    describe('that is a string', () => {
      it('makes the item list scrollable and set a max height', () => {
        expect(
          <Menu
            trigger={ <Button>trigger</Button> }
            maxHeight={ '80vh' }
          >
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
            <Menu.Item>Three</Menu.Item>
          </Menu>,
          'when clicking on the trigger',
          'to contain',
          <View className='scrollable' style={{ maxHeight: '80vh' }}>
            <View className='item'>One</View>
            <View className='item'>Two</View>
            <View className='item'>Three</View>
          </View>
        )
      })
    })
  })

  describe('with fixedWidth', () => {
    it('renders a menu with fixed width', () => {
      expect(
        <Menu
          fixedWidth
          trigger={ <Button>trigger</Button> }
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when clicking on the trigger',
        'to contain',
        <View className='menu fixed_width'/>
      )
    })
  })

  describe('visibility hooks', () => {
    it('onOpen is called when the menu is shown', () => {
      const onOpen = sinon.spy()

      return expect(
        <Menu
          trigger={ <Button>trigger</Button> }
          onOpen={ onOpen }
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when clicking on the trigger',
        'to satisfy', () => {
          expect(onOpen, 'was called once')
        }
      )
    })

    it('onClose is called when the menu is closed', () => {
      const onClose = sinon.spy()

      return expect(
        <Menu
          trigger={ <Button>trigger</Button> }
          onClose={ onClose }
        >
          <Menu.Item>One</Menu.Item>
          <Menu.Item>Two</Menu.Item>
          <Menu.Item>Three</Menu.Item>
        </Menu>,
        'when deeply rendered',
        'with event', 'click', 'on',
        <Button>trigger</Button>,
        'with event', 'click', 'on',
        <Button>trigger</Button>
      ).then(() => {
        expect(onClose, 'was called once')
      })
    })
  })
})
