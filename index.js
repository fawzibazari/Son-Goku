/*
 * Complete the 'optimalPosition' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY food
 *  2. INTEGER_ARRAY dist
 */

// const food = [3, 2, 5, 4];
// const dist = [2, 3, 4, 2];

const food = [2, 4, 5, 2];
const dist = [4, 3, 1, 3];

// const food = [8, 4, 1, 9];
// const dist = [10, 9, 3, 5];

function optimalPosition(foods, dists) {
  const n = foods.length;
  const food_copie = [...foods];
  const finalArray = [];
  console.log(foods);
  console.log(dists);
  let res = 0;
  for (let index = 0; index < dists.length; index++) {
    let final_res = null;
    const food = foods[index];
    const dist = dists[index];
    // console.log({ food: food, index: index });
    const newDistArray = index == 0 ? dists : arraySwitcher(dists);
    const newFoodArray = index == 0 ? foods : arraySwitcher(food_copie);
    for (let j = 0; j < newDistArray.length; j++) {
      const element = foods[index];
      const element2 = dists[j];
      if ((final_res ?? element) - (element2 ?? dists[0]) < 0) {
        // console.log("negative");
        break;
      } else {
        // console.log(
        //   `${final_res ?? element} - ${element2 ?? dists[0]} + ${
        //     newFoodArray[j + 1] ?? 0
        //   } = `
        // );
        final_res =
          (final_res ?? element) -
          (element2 ?? dists[0]) +
          (newFoodArray[j + 1] ?? 0);
        // console.log(final_res);
        if (j === newDistArray.length - 1) {
          finalArray.push(index);
        }
      }
    }
  }
  const result = finalArray.length == 0 ? -1 : Math.min(...finalArray);
  console.log(
    result == -1
      ? "There is Zero path where Son Goku can finish his travel 😓"
      : `The optimal position for Son Goku to finish hes travel is: ${result}`
  );
  return result;
}

function arraySwitcher(array) {
  array.push(array.shift(array));
  return array;
}

optimalPosition(food, dist);
