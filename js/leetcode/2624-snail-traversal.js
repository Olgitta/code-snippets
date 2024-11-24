/**
 * https://leetcode.com/problems/snail-traversal/description/
 *
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(rowsCount * colsCount !== this.length) {
        return [];
    }

    let result = [];
    while(result.length < rowsCount) {
        result.push([]);
    }

    let colDown = true;
    let colUp = false;
    let currentCol = 0;

    for(let i = 0; i < this.length; i++) {

        result[currentCol].push(this[i]);

        if(colDown) {
            currentCol++;
        }

        if(colUp) {
            currentCol--;
        }


        if(currentCol === rowsCount) {
            colUp = true;
            colDown = false;
            currentCol--;
        }

        if(currentCol < 0) {
            colUp = false;
            colDown = true;
            currentCol++;
        }

    }

    console.log(result);
    return result;
}

const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
nums.snail(5,4);
/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */