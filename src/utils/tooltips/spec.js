import createTooltipManager from './createTooltipManager'
import expect from 'test/expect'

describe('Tooltips', () => {
  describe('createTooltipManager', () => {
    it('should return instance', () => {
      const instance = createTooltipManager(document.createElement('div'))

      expect(instance, 'to only have keys', ['hide', 'show'])
    })
  })
})
