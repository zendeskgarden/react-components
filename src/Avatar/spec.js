import React from 'react'
import expect from 'test/expect'
import Avatar from './'
import View from '../core/View'

describe('Avatar', () => {
  it('renders a default avatar', () => {
    expect(
      <Avatar src='nyancat.png' alt='an awesome cat' />,
      'to render as',
      <img src='nyancat.png' alt='an awesome cat' />
    )
  })

  describe('with the type system', () => {
    it('renders a system avatar', () => {
      expect(
        <Avatar src='zendesk.png' alt='Zendesk' type='system' />,
        'to render as',
        <View className='c-avatar type_system'>
          <img src='zendesk.png' alt='Zendesk' />
        </View>
      )
    })
  })

  describe('with the status present', () => {
    it('renders a present avatar', () => {
      expect(
        <Avatar src='zendesk.png' alt='Zendesk' status='present' />,
        'to render as',
        <View className='c-avatar status_present'>
          <img src='zendesk.png' alt='Zendesk' />
        </View>
      )
    })
  })

  describe('with the status away', () => {
    it('renders an away avatar', () => {
      expect(
        <Avatar src='zendesk.png' alt='Zendesk' status='away' />,
        'to render as',
        <View className='c-avatar status_away'>
          <img src='zendesk.png' alt='Zendesk' />
        </View>
      )
    })
  })

  describe('with the status active', () => {
    it('renders an active avatar', () => {
      expect(
        <Avatar src='zendesk.png' alt='Zendesk' status='active' />,
        'to render as',
        <View className='c-avatar status_active'>
          <img src='zendesk.png' alt='Zendesk' />
        </View>
      )
    })
  })

  describe('when size is small', () => {
    it('renders a small avatar', () => {
      expect(
        <Avatar src='zendesk.png' alt='Zendesk' size='small' />,
        'to render as',
        <View className='c-avatar size_small'>
          <img src='zendesk.png' alt='Zendesk' />
        </View>
      )
    })
  })

  describe('when size is medium', () => {
    it('renders a medium avatar (no size modifier)', () => {
      expect(
        <Avatar src='zendesk.png' alt='Zendesk' size='medium' />,
        'to render as',
        <View className='c-avatar'>
          <img src='zendesk.png' alt='Zendesk' />
        </View>
      )
    })
  })

  describe('when size is large', () => {
    it('renders a large avatar', () => {
      expect(
        <Avatar src='zendesk.png' alt='Zendesk' size='large' />,
        'to render as',
        <View className='c-avatar size_large'>
          <img src='zendesk.png' alt='Zendesk' />
        </View>
      )
    })
  })

  describe('when size is given as pixels', () => {
    it('renders a large avatar', () => {
      expect(
        <Avatar src='zendesk.png' alt='Zendesk' size='65px' />,
        'to render as',
        <View className='c-avatar' style={{ height: '65px', width: '65px' }}>
          <img src='zendesk.png' alt='Zendesk' />
        </View>
      )
    })
  })
})
