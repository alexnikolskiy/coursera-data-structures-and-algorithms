## Improving Quick Sort
The goal in this problem is to redesign a given implementation of the randomized
quick sort algorithm so that it works fast even on sequences containing
many equal elements.<br>
To force the given implementation of the quick sort algorithm to efficiently process sequences with
few unique elements, your goal is replace a 2-way partition with a 3-way partition. That is, your new
partition procedure should partition the array into three parts: < 𝑥 part, = 𝑥 part, and > 𝑥 part.

### Input Format
The first line of the input contains an integer 𝑛. The next line contains a sequence of 𝑛
integers 𝑎0, 𝑎1, . . . , 𝑎𝑛−1.

### Output Format
Output this sequence sorted in non-decreasing order.

### Sample
Input | Output
--- | ---
5 | 2 2 2 3 9
2 3 9 2 2 |
