## Maximum Value of the Loot
A thief finds much more loot than his bag can fit. Help him to find the most valuable combination of items assuming that any fraction of a loot item can be put into his bag.<br>
The goal of this code problem is to implement an algorithm for the fractional knapsack problem.

### Input Format
The first line of the input contains the number 𝑛 of items and the capacity 𝑊 of a knapsack.
The next 𝑛 lines define the values and weights of the items. The 𝑖-th line contains integers 𝑣𝑖 and 𝑤𝑖—the
value and the weight of 𝑖-th item, respectively.

### Output Format
Output the maximal value of fractions of items that fit into the knapsack. The absolute
value of the difference between the answer of your program and the optimal value should be at most
10−3. To ensure this, output your answer with at least four digits after the decimal point (otherwise
your answer, while being computed correctly, can turn out to be wrong because of rounding issues).

### Sample 1
Input | Output
--- | ---
3 50 | 180.0000
60 20 |
100 50 |
120 30 |

### Sample 2
Input | Output
--- | ---
1 10 | 166.6667
500 30 |
