## Is it a binary search tree? Hard version
You are given a binary tree with integers as its keys. You need to test whether it is a correct binary
search tree. Note that there can be duplicate integers in the tree, and this is allowed. The definition of
the binary search tree in such case is the following: for any node of the tree, if its key is 𝑥, then for any
node in its left subtree its key must be strictly less than 𝑥, and for any node in its right subtree its key
must be greater than **or equal** to 𝑥. In other words, smaller elements are to the left, bigger elements
are to the right, and duplicates are always to the right. You need to check whether the given binary
tree structure satisfies this condition. You are guaranteed that the input contains a valid binary tree.
That is, it is a tree, and each node has at most two children.

### Input Format
The first line contains the number of vertices 𝑛. The vertices of the tree are numbered
from 0 to 𝑛 − 1. Vertex 0 is the root.

The next 𝑛 lines contain information about vertices 0, 1, ..., 𝑛−1 in order. Each of these lines contains
three integers 𝑘𝑒𝑦𝑖, 𝑙𝑒𝑓𝑡𝑖 and 𝑟𝑖𝑔ℎ𝑡𝑖 — 𝑘𝑒𝑦𝑖 is the key of the 𝑖-th vertex, 𝑙𝑒𝑓𝑡𝑖 is the index of the left
child of the 𝑖-th vertex, and 𝑟𝑖𝑔ℎ𝑡𝑖 is the index of the right child of the 𝑖-th vertex. If 𝑖 doesn’t have
left or right child (or both), the corresponding 𝑙𝑒𝑓𝑡𝑖 or 𝑟𝑖𝑔ℎ𝑡𝑖 (or both) will be equal to −1.

### Output Format
If the given binary tree is a correct binary search tree (see the definition in the problem
description), output one word “CORRECT” (without quotes). Otherwise, output one word “INCORRECT”
(without quotes).

### Sample 1
Input | Output
--- | ---
3 | CORRECT
2 1 2 |
1 -1 -1 |
3 -1 -1 |
Explanation:<br>
Left child of the root has key 1, right child of the root has key 3, root has key 2, so everything to the
left is smaller, everything to the right is bigger.

### Sample 2
Input | Output
--- | ---
3 | INCORRECT
1 1 2 |
2 -1 -1 |
3 -1 -1 |
Explanation:<br>
The left child of the root must have smaller key than the root.

### Sample 3
Input | Output
--- | ---
3 | CORRECT
2 1 2 |
1 -1 -1 |
2 -1 -1 |
Explanation:<br>
Duplicate keys are allowed, and they should always be in the right subtree of the first duplicated
element.

### Sample 4
Input | Output
--- | ---
3 | INCORRECT
2 1 2 |
2 -1 -1 |
3 -1 -1 |
Explanation:<br>
The key of the left child of the root must be strictly smaller than the key of the root.
