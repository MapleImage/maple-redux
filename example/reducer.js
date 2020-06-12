function counter(state = 0, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
      break;
    case "DECREASE":
      return state - 1;
      break;
      break;
    default:
      return state;
      break;
  }
}
