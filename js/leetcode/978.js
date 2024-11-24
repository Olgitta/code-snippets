/**
 * https://leetcode.com/problems/longest-turbulent-subarray/
 *
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {

    if (arr.length === 1) return 1;


    for (let i = 1; i < arr.length - 1; i++) {

        const cmp = Math.sign(arr[i] - arr[i - 1]);
        console.log('cmp', `${arr[i]} - ${arr[i - 1]}`);
        console.log('cmp', cmp);
    }

    return;
};

maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]);

/**
 * by GPT
 *
 * Here’s a solution to the "Longest Turbulent Subarray" problem in JavaScript:
 *
 * ### Approach:
 * 1. Use a sliding window to track the start of the current turbulent subarray.
 * 2. Traverse the array while checking if the turbulent condition holds:
 *    - For `arr[i - 1] < arr[i] > arr[i + 1]` or `arr[i - 1] > arr[i] < arr[i + 1]`.
 * 3. If the turbulent condition is violated, reset the start of the sliding window.
 * 4. Track the maximum length of turbulent subarrays.
 *
 * ### Solution:
 * ```javascript
 * var maxTurbulenceSize = function(arr) {
 *     if (arr.length === 1) return 1; // Single-element array
 *
 *     let maxLen = 1; // Minimum length of any subarray is 1
 *     let start = 0;  // Start of the current turbulent subarray
 *
 *     for (let i = 1; i < arr.length; i++) {
 *         // Compare current and previous elements
 *         const cmp = Math.sign(arr[i] - arr[i - 1]);
 *
 *         if (i === arr.length - 1 || cmp * Math.sign(arr[i + 1] - arr[i]) !== -1) {
 *             // If end of turbulent pattern
 *             if (cmp !== 0) {
 *                 maxLen = Math.max(maxLen, i - start + 1);
 *             }
 *             start = i;
 *         }
 *     }
 *
 *     return maxLen;
 * };
 * ```
 *
 * ---
 *
 * ### Explanation:
 *
 * #### Key Operations:
 * 1. **Comparisons**:
 *    - `Math.sign(arr[i] - arr[i - 1])` determines the comparison sign (`1`, `-1`, or `0`).
 *    - Turbulent condition is satisfied if the signs alternate.
 * 2. **Sliding Window Reset**:
 *    - When the turbulent condition is violated, reset the start of the sliding window to the current index.
 *
 * #### Complexity:
 * - **Time Complexity**: \( O(n) \)
 *   We iterate through the array once, performing constant work at each step.
 * - **Space Complexity**: \( O(1) \)
 *   Only a few variables are used.
 *
 * ---
 *
 * ### Example Walkthrough:
 * #### Input:
 * ```javascript
 * maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]);
 * ```
 *
 * #### Steps:
 * 1. Start with `start = 0`, `maxLen = 1`.
 * 2. Check turbulence:
 *    - `9 > 4 < 2`: valid, `maxLen = 3`.
 *    - `4 < 2 > 10`: valid, `maxLen = 5`.
 *    - `2 > 10 < 7`: valid.
 *    - `10 < 7 > 8`: valid.
 *    - `7 > 8 == 8`: turbulence broken, reset `start`.
 *    - Continue checking...
 * 3. Final result: `maxLen = 5`.
 *
 * #### Output:
 * ```javascript
 * 5
 * ```
 */
