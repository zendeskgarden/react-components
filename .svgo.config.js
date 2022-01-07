module.exports = {
  plugins: [
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            focusable: false
          },
          {
            'aria-hidden': true
          }
        ]
      }
    }
  ]
};
