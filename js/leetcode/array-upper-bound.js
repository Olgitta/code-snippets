/**
 * The **"Array Upper Bound"** problem on LeetCode involves finding the smallest index
 * in a sorted array where a given value could be inserted without disrupting the array's order.
 * This concept, often tied to binary search, requires you to implement
 * a function that efficiently determines this position. Here's a high-level overview of the task:
 *
 * ### Problem Description
 *
 * Given:
 * - A sorted array `nums` of unique integers in non-decreasing order.
 * - A target value `target`.
 *
 * You need to return the smallest index `i` such that inserting `target` at index `i`
 * keeps the array sorted. If `target` already exists in `nums`,
 * the result should be the index just after the last occurrence of `target` (ensuring an "upper bound").
 *
 * ---
 *
 * ### Example Scenarios
 *
 * #### Example 1:
 * Input:
 * ```plaintext
 * nums = [1, 3, 5, 6], target = 5
 * ```
 * Output:
 * ```plaintext
 * 2
 * ```
 * Explanation: The target `5` is found at index 2. The "upper bound" for insertion is the next position after `5`.
 *
 * #### Example 2:
 * Input:
 * ```plaintext
 * nums = [1, 3, 5, 6], target = 2
 * ```
 * Output:
 * ```plaintext
 * 1
 * ```
 * Explanation: The value `2` is not in the array, but its correct insertion point to maintain order is at index 1.
 *
 * #### Example 3:
 * Input:
 * ```plaintext
 * nums = [1, 3, 5, 6], target = 7
 * 4-2=2
 * ```
 * Output:
 * ```plaintext
 * 4
 * ```
 * Explanation: The target `7` should be appended at the end of the array.
 *
 * ---
 *
 * ### Constraints
 * 1. The input array `nums` is sorted and contains unique elements.
 * 2. The solution must be efficient, ideally running in **O(log n)** time, leveraging binary search techniques.
 *
 * For further information or to try solving the problem, visit [LeetCode's Array Upper Bound page](https://leetcode.com/problems/array-upper-bound/).
 */

const arrayUpperBound = function (nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] <= target) {
            left = mid + 1; // Move right for an upper bound
        } else {
            right = mid; // Move left
        }
    }

    console.log('left: ' + left);
    return left; // `left` points to the upper bound
};


arrayUpperBound([1, 3, 5, 6], 5);
arrayUpperBound([1, 3, 5, 6], 7);
arrayUpperBound([1, 3, 5, 6], 2);