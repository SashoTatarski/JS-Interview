// Design a memorization function which adds 10 to provided value and takes it from cache if it was already calculated

const memorizeAdd = () => {
  let cache = {};

  return (value) => {
    if (value in cache) {
      console.log('fetching from cache');
      return cache[value];
    }

    console.log('calculating results');
    const result = value + 10;
    cache[value] = result;
    return result;
  };
};

const newAdd = memorizeAdd();
console.log(newAdd(9));
console.log(newAdd(9));
