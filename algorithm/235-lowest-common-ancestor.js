// 二叉搜索树的最近公共祖先：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let res = null
  function process(root, p, q) {
      if (p.val > root.val && q.val > root.val) {
          return process(root.right, p, q)
      }
      if (p.val < root.val && q.val < root.val) {
          return process(root.left, p, q)
      }
      return root
  }
  res = process(root, p, q)
  return res;
};