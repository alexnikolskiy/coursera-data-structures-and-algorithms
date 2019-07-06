## Partitioning Souvenirs
You and two of your friends have just returned back home after visiting various countries. Now you would
like to evenly split all the souvenirs that all three of you bought.

### Input Format
The first line contains an integer 𝑛. The second line contains integers 𝑣1, 𝑣2, . . . , 𝑣𝑛 separated
by spaces.

### Output Format
Output 1, if it possible to partition 𝑣1, 𝑣2, . . . , 𝑣𝑛 into three subsets with equal sums, and
0 otherwise.

### Sample 1
Input | Output
--- | ---
4 | 0
3 3 3 3 | 

### Sample 2
Input | Output
--- | ---
1 | 0
40 | 
 
### Sample 3
Input | Output
--- | ---
11 | 1
17 59 34 57 17 23 67 1 18 2 59 | 

34 + 67 + 17 = 23 + 59 + 1 + 17 + 18 = 59 + 2 + 57

### Sample 4
Input | Output
--- | ---
13 | 1
1 2 3 4 5 5 7 7 8 10 12 19 25 | 

1 + 3 + 7 + 25 = 2 + 4 + 5 + 7 + 8 + 10 = 5 + 12 + 19
