## Phone book
In this task your goal is to implement a simple phone book manager. It should be able to process
the following types of user’s queries:
- **add** number name. It means that the user adds a person with name name and phone number
number to the phone book. If there exists a user with such number already, then your manager
has to overwrite the corresponding name.
- **del** number. It means that the manager should erase a person with number number from the
phone book. If there is no such person, then it should just ignore the query.
- **find** number. It means that the user looks for a person with phone number number. The manager
should reply with the appropriate name, or with string “not found" (without quotes) if there is
no such person in the book.

### Input Format
There is a single integer 𝑁 in the first line — the number of queries. It’s followed by 𝑁
lines, each of them contains one query in the format described above.

### Output Format
Print the result of each **find** query — the name corresponding to the phone number or
“not found" (without quotes) if there is no person in the phone book with such phone number. Output
one result per line in the same order as the **find** queries are given in the input.

### Sample 1
Input | Output
--- | ---
12 | Mom
add 911 police | not found
add 76213 Mom | police
add 17239 Bob | not found
find 76213 | Mom
find 910 | daddy
find 911 |
del 910 |
del 911 |
find 911 |
find 76213 |
add 76213 daddy |
find 76213 |

Explanation:<br>
76213 is Mom’s number, 910 is not a number in the phone book, 911 is the number of police, but
then it was deleted from the phone book, so the second search for 911 returned “not found". Also,
note that when the daddy was added with the same phone number 76213 as Mom’s phone number,
the contact’s name was rewritten, and now search for 76213 returns “daddy" instead of “Mom".

### Sample 2
Input | Output
--- | ---
8 | not found
find 3839442 | granny
add 123456 me | me
add 0 granny | not found
find 0 |
find 123456 |
del 0 |
del 0 |
find 0 |

Explanation:<br>
Recall that deleting a number that doesn’t exist in the phone book doesn’t change anything.
