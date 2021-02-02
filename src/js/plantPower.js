// This funciton stores our state.

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

export const giveSun = changeState ("light")(1);
export const growLamp = changeState ("light")(5);

export const eatFly = changeState ("protein")(1);






// let flower= { soil: 0, light: 0, water: 0 }
// let cactus = {}
// let venusFlytrap = { soil: 0, light: 0, water: 0, protein: 0}
