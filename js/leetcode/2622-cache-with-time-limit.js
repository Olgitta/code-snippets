/**
 * https://leetcode.com/problems/cache-with-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
 *
 * @constructor
 */

var TimeLimitedCache = function() {
    this.map = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let exists = false;

    if(this.map.has(key)) {
        exists = true;
        let {value, timeout} = this.map.get(key);
        clearTimeout(timeout);
    }

    let timeout =  setTimeout(() => this.map.delete(key), duration);
    this.map.set(key, {value, timeout});

    return exists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        let {value, timeout} = this.map.get(key);
        return value;
    }

    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.map.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */