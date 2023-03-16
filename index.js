/*
 * Complete the 'optimalPosition' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY food
 *  2. INTEGER_ARRAY dist
 */

const food = [2, 4, 5, 2];
const dist = [4, 3, 1, 3];

function optimalPosition(foods, dists) {
  const n = foods.length;
  console.log(foods);
  console.log(dists);
  let res = 0;
  for (let index = 0; index < dists.length; index++) {
    let final_res = null;
    const food = foods[index];
    const dist = dists[index];
    console.log({ food: food });
    const newArray = index == 0 ? dists : arraySwitcher(dists);
    for (let j = 0; j < newArray.length; j++) {
      console.log(foods[j]);
      const element = foods[index];
      const element2 = dists[j];
      // console.log(
      //   `${final_res ?? element} - ${element2 ?? dists[0]} + ${
      //     foods[j + 1] ?? 0
      //   }`
      // );
      final_res =
        (final_res ?? element) - (element2 ?? dists[0]) + (foods[j + 1] ?? 0);
    }
  }
}

function arraySwitcher(array) {
  array.push(array.shift(array));
  return array;
}
optimalPosition(food, dist);
