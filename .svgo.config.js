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
            ariaHidden: true
          }
        ]
      }
    }
  ]
};
