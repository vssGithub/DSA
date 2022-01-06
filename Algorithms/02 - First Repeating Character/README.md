# First Repeating Character

Given a string _str_, create a function that returns the first repeating character in the string.

01 - The first algorithm has O(n<sup>2</sup>) performance due to the nested _for_ loop (brute force)

02 - The second algorithm has O(n) performance; although the hashtable provides constant time loopkup, we need to iterate through all the values (worst case) to determine a match
