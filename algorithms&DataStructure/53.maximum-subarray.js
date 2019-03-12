/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.83%)
 * Total Accepted:    469.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //brute force: generate every single possible sum and return the largest value

  //brute force: find all subarray 
  //go through array, calculate sum
  //if sum is smaller than previous sum, sum = 0
  // if sum is greater than previous and greater than result update result
  let sum = 0;
  let result = 0;
  let sorted = nums.concat().sort((a, b) => {
    return a - b;
  });
  console.log(sorted)
  if (sorted[nums.length - 1] <= 0) {
    return sorted[nums.length - 1];
  }
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum < 0) {
      sum = 0;
    } else if (sum > result) {
      result = sum;
    }
    console.log(nums)

  }
  return result;
};

console.log(maxSubArray([-2, -1]));