import { stateControl, changeState } from '../src/js/plantPower.js';

describe('changeState', () => {

  test("This will test that state is being changed.", () => {
    // const stateControl = storeState();
    const test = changeState("test")(2);
    expect(stateControl(test)).toEqual({test:1});
  });
});