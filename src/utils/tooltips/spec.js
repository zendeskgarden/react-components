import createTooltipManager from './createTooltipManager'
import globalKey from './globalKey'
import expect from 'test/expect'

describe('Tooltips', () => {
  describe('createTooltipManager', () => {
    it('should return instance', () => {
      const instance = createTooltipManager()

      expect(instance, 'to only have keys', ['hide', 'show'])
    })

    it('should attach instance to window', () => {
      createTooltipManager()

      expect(window[globalKey], 'to only have keys', ['hide', 'show'])
    })
  })
})
