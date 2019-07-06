## Money Change Again
As we already know, a natural greedy strategy for the change problem does not work correctly for any set of
denominations. For example, if the available denominations are 1, 3, and 4, the greedy algorithm will change
6 cents using three coins (4 + 1 + 1) while it can be changed using just two coins (3 + 3). Your goal now is
to apply dynamic programming for solving the Money Change Problem for denominations 1, 3, and 4.

### Input Format
Integer money.

### Output Format
The minimum number of coins with denominations 1, 3, 4 that changes money.

### Sample 1
Input | Output
--- | ---
2 | 2

2 = 1 + 1.

### Sample 2
Input | Output
--- | ---
34 | 9

34 = 3 + 3 + 4 + 4 + 4 + 4 + 4 + 4 + 4
