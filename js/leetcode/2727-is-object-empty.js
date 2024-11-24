/**
 * https://leetcode.com/problems/is-object-empty/description/?envType=study-plan-v2&envId=30-days-of-javascript
 *
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)) {
        return obj.length ? false : true;
    }

    return Object.keys(obj).length ? false: true;
};

var isEmpty_v1 = function(obj) {
    if(Array.isArray(obj)) {
        return !obj.length;
    }

    return !Object.keys(obj).length;
};

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty_v2 = function(obj) {
    for (const _ in obj) return false;
    return true;
};