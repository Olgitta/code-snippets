/**
 * https://leetcode.com/problems/group-by/?envType=study-plan-v2&envId=30-days-of-javascript
 *
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let result = {};

    for (let v of this) {

        let k = fn(v);


        if (!result[k]) {
            result[k]=[];
        }

        result[k].push(v);
    }

    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */