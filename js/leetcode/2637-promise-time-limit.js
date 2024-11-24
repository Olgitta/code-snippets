/**
 * https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
 *
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {

    return async function(...args) {

        return new Promise((res, rej) => {
            let tout = setTimeout(() => rej("Time Limit Exceeded"), t);

            fn(...args).then(r => {
                clearTimeout(tout)
                res(r)
            }).catch(e => {
                clearTimeout(tout)
                rej(e)
            })
        })

    }
};

const fn = async (a, b) => { await new Promise(res => setTimeout(res, 120)); return a + b; };
const limited = timeLimit(fn, 50);
limited([5]).then(console.log).catch(console.error);

//
// const fn = (n) => new Promise((resolve) => setTimeout(() => resolve(n * 2), 100));
// const limited = timeLimit(fn, 200);
// limited(5).then(console.log).catch(console.error);
//
//
// const fn = (n) => new Promise((resolve) => setTimeout(() => resolve(n * 2), 300));
// const limited = timeLimit(fn, 200);
// limited(5).then(console.log).catch(console.error);

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */