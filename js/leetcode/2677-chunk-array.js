/**
 * https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 *
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {

    let result = [];

    if (!arr.length) {
        return result;
    }

    let subarr = [];

    for (v of arr) {
        if (subarr.length === size) {
            result.push(subarr);
            subarr = [];
        }
        subarr.push(v);
    }

    if (subarr.length <= size) {
        result.push(subarr);
    }

    return result;
};
