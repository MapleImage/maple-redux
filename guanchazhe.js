const guanchazhe = () => {
  const subscribe = [];

  const push = (item) => subscribe.push(item);
  const fire = () => subscribe.forEach((item) => item());
  const pop = (item) => (subscribe = subscribe.filter((__) => __ !== item));
  return {
    push,
    fire,
    pop,
  };
};
