/*
 * Complete the 'optimalPosition' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY food
 *  2. INTEGER_ARRAY dist
 */

// const food = [2, 4, 5, 2];
// const dist = [4, 3, 1, 3];
const food = [3, 2, 5, 4];
const dist = [2, 3, 4, 2];

function optimalPosition(foods, dists) {
  const n = foods.length;
  console.log(foods);
  console.log(dists);
  let res = 0;
  for (let index = 0; index < dists.length; index++) {
    let final_res = null;
    const food = foods[index];
    const dist = dists[index];
    console.log({ food1: food });
    for (let j = 0; j < dists.length; j++) {
      if (j < n) {
        const element = foods[index];
        const element2 = dists[j];
        console.log(
          `${final_res ?? element} - ${element2 ?? dists[0]} + ${
            foods[j + 1] ?? 0
          }`
        );
        final_res =
          (final_res ?? element) - (element2 ?? dists[0]) + (foods[j + 1] ?? 0);
          console.log(final_res);
        
      }
    }
    //     final_res += food - dist + (foods[index + 1] ?? foods[1])
    //     console.log(final_res);
    // console.log(index);
    // final_res += (final_res != 0 ? final_res : num1) - num2 + (food[index + 1] ?? 0);
    // console.log(final_res);
  }
  //    res += food[1] - dist[1] + food[2]
  //    console.log(res);
}

optimalPosition(food, dist);
