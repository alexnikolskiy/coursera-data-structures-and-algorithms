## Binary tree traversals
You are given a rooted binary tree. Build and output its in-order, pre-order and post-order traversals.

### Input Format
The first line contains the number of vertices 𝑛. The vertices of the tree are numbered
from 0 to 𝑛 − 1. Vertex 0 is the root.

The next 𝑛 lines contain information about vertices 0, 1, ..., 𝑛−1 in order. Each of these lines contains
three integers 𝑘𝑒𝑦𝑖, 𝑙𝑒𝑓𝑡𝑖 and 𝑟𝑖𝑔ℎ𝑡𝑖 — 𝑘𝑒𝑦𝑖 is the key of the 𝑖-th vertex, 𝑙𝑒𝑓𝑡𝑖 is the index of the left
child of the 𝑖-th vertex, and 𝑟𝑖𝑔ℎ𝑡𝑖 is the index of the right child of the 𝑖-th vertex. If 𝑖 doesn’t have
left or right child (or both), the corresponding 𝑙𝑒𝑓𝑡𝑖 or 𝑟𝑖𝑔ℎ𝑡𝑖 (or both) will be equal to −1.

### Output Format
Print three lines. The first line should contain the keys of the vertices in the in-order
traversal of the tree. The second line should contain the keys of the vertices in the pre-order traversal
of the tree. The third line should contain the keys of the vertices in the post-order traversal of the tree.

### Sample 1
Input | Output
--- | ---
5 | 1 2 3 4 5
4 1 2 | 4 2 1 3 5
2 3 4 | 1 3 2 5 4
5 -1 -1 |
1 -1 -1 |
3 -1 -1 |

### Sample 2
Input | Output
--- | ---
10 | 1 2 3 4 5
0 7 2 | 50 70 80 30 90 40 0 20 10 60
10 -1 -1 | 0 70 50 40 30 80 90 20 60 10
20 -1 6 | 50 80 90 30 40 70 10 60 20 0
30 8 9 | 
40 3 -1 | 
50 -1 -1 | 
60 1 -1 | 
70 5 4 | 
80 -1 -1 | 
90 -1 -1 | 
