/* eslint-disable no-undef */
const assert = require('assert');
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i  ; j < nums.length; j++) {
      if ((i !== j) && (nums[i] + nums[j]) === target) {
        result = [i, j];
      }
    }
  }
  return result;
}

const t0 = performance.now();
twoSum([2, 7, 11, 15], 9)
const t1 = performance.now();
console.log(`Call to twoSum took ${t1 - t0} milliseconds.`);

describe('Two Sum', () => {
  describe('should return indexes array when the value sum equals target value', () => {
    it('Example 1', async () => {
      const result = await twoSum([2, 7, 11, 15], 9);
      assert.deepEqual(result, [0, 1]);
    });
    it('Example 2', async () => {
      const result = await twoSum([3, 2, 4], 6);
      assert.deepEqual(result, [1, 2]);
    });
    it('Example 3', async () => {
      const result = await twoSum([3, 3], 6);
      assert.deepEqual(result, [0, 1]);
    });
  });
});
