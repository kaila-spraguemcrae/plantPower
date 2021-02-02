import { stateControl, changeState, feed, blueFood, hydrate, superWater } from '../src/js/plantPower.js';

describe('changeState', () => {
  test("This will test that state exists", () => {
    expect(stateControl()).toEqual({});
  });

  test("This will test that state is being changed.", () => {
    // const stateControl = storeState();
    const test = changeState("test")(1);
    expect(stateControl(test)).toEqual({test:1});
  });
});