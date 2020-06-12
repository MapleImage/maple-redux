const createStore = (reducer, preloadedState, enhancer) => {
  let state = preloadedState;
  let listers = [];
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listers.forEach((listen) => listen());
  };
  const subscribe = (func) => {
    listers.push(func);
    console.log({ listers });
    return () => {
      listers = listers.filter((item) => item !== func);
      console.log({ listers });
    };
  };

  dispatch({
    type: "@@init",
  });
  return {
    getState,
    subscribe,
    dispatch,
  };
};
