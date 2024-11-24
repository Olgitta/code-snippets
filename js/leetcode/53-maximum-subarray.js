/**
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let currSum = 0;
    let maxSum = nums[0];

    for(let n of nums) {
        currSum += n;
        maxSum = Math.max(maxSum, currSum);
        if (currSum < 0) {
            currSum = 0;
        }

    }

    return maxSum;

};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);