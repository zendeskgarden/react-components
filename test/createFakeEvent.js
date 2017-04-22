import sinon from 'sinon';

const createFakeEvent = data => {
  return {
    preventDefault: sinon.spy(),
    stopPropagation: sinon.spy(),
    ...data
  };
};

export default createFakeEvent;
