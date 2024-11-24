/**
 * https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript
 *
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    let fnLength = functions.length;
    let res = new Array(fnLength);
    let resolvedCount = 0;

    return new Promise((resolve, reject) => {

        functions.forEach((fn, idx) => {
            fn()
                .then(r => {
                    res[idx] = r;
                    resolvedCount++;
                    if (resolvedCount === fnLength) {
                        resolve(res);
                    }
                })
                .catch(reject)
        })
    });

};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */