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

function optimalPosition(food, dist) {
  for (let index = 0; index < food.length; index++) {
    const num1 = food[index];
    const num2 = dist[index];
    console.log(food);
    console.log(dist);
    let final_res = 0;
    let i = 0;
    if (i == 0) {
      if (food[index + 1]) {
        i = food[1];
        final_res = i - num2 + i;
        console.log(final_res);
        i = final_res;
      } else {
        final_res = num1 - num2;
        console.log(final_res);
        i = final_res;
      }
    } else {
      if (food[index + 1]) {
        final_res = num1 - num2 + i;
        console.log(final_res);
        i = final_res;
      } else {
        final_res += num1 - num2;
        console.log(final_res);
        i = final_res;
      }
    }
  }
}

optimalPosition(food, dist);
