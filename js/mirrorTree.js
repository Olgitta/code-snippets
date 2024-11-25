/**
 * interview task: Write code to mirror a tree structure.
 * Basically replace right and left recursively from the root to the entire tree.
 */

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const inOrderTraversal = function(node) {
    if(node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}


class InOrderTraversal {

    output = [];

    travers (node) {
        if(node === null) {
            return;
        }
        this.travers(node.left);
        this.output.push(node.value);
        this.travers(node.right);
    }

}

const buildTree = function(nums) {
    const tree = new TreeNode(nums[0]);

    for (let i = 1; i < nums.length; i++) {

        const queue = [tree];

        while (queue.length) {
            const node = queue.shift();

            if(node.left === null) {
                node.left = new TreeNode(nums[i]);
                break;
            } else {
                queue.push(node.left);
            }

            if(node.right === null) {
                node.right = new TreeNode(nums[i]);
                break;
            } else {
                queue.push(node.right);
            }
        }
    }

    // console.log('tree', tree);

    return tree;
}

const mirrorTree = function(node) {
    if(node === null) return;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    mirrorTree(node.left);
    mirrorTree(node.right);
}

const buildTree_v2 = function(nums) {
    const root = new TreeNode(nums[0]);
    const queue = [root];
    let i = 1;

    while (i < nums.length) {
        const node = queue.shift();

        node.left = new TreeNode(nums[i]);
        queue.push(node.left);
        i++;

        if(i >= nums.length) break;

        node.right = new TreeNode(nums[i]);
        queue.push(node.right);
        i++;
    }

    return root;
}

{
    const tree = buildTree([1,2,3,4,5,6,7]);
    inOrderTraversal(tree);
    mirrorTree(tree);
    inOrderTraversal(tree);
}

{
    const tree = buildTree_v2([1,2,3,4,5,6,7]);

    const out1 = new InOrderTraversal();
    out1.travers(tree);
    console.log(out1.output.join('---'));

    mirrorTree(tree);

    const out2 = new InOrderTraversal();
    out2.travers(tree);
    console.log(out2.output.join('---'));
}