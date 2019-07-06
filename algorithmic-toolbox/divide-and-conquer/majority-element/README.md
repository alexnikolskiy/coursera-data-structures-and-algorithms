## Majority Element
Majority rule is a decision rule that selects the alternative which has a majority,
that is, more than half the votes.
Given a sequence of elements 𝑎1, 𝑎2, . . . , 𝑎𝑛, you would like to check whether
it contains an element that appears more than 𝑛/2 times. A naive way to do
this is the following.

```
MajorityElement(𝑎1, 𝑎2, . . . , 𝑎𝑛):
for 𝑖 from 1 to 𝑛:
currentElement ← 𝑎𝑖
count ← 0
for 𝑗 from 1 to 𝑛:
if 𝑎𝑗 = currentElement:
count ← count + 1
if count > 𝑛/2:
return 𝑎𝑖
return “no majority element”
```

The running time of this algorithm is quadratic. Your goal is to use the divide-and-conquer technique to
design an 𝑂(𝑛 log 𝑛) algorithm.

### Input Format
The first line contains an integer 𝑛, the next one contains a sequence of 𝑛 non-negative
integers 𝑎0, 𝑎1, . . . , 𝑎𝑛−1.

### Output Format
Output 1 if the sequence contains an element that appears strictly more than 𝑛/2 times,
and 0 otherwise.

### Sample 1
Input | Output
--- | ---
5 | 1
2 3 9 2 2 |

2 is the majority element.

### Sample 2
Input | Output
--- | ---
4 | 0
1 2 3 4 |

There is no majority element in this sequence.

### Sample 3 
Input | Output
--- | ---
4 | 0
1 2 3 1 |
This sequence also does not have a majority element (note that the element 1 appears twice and hence
is not a majority element).
