## Quicksort
Quicksort is a divide-and-conquer algorithm used for sorting. It works by:
1. **Choosing a Pivot**: Selects an element from the array, in this case, the last one.
2. **Partitioning**: Rearranges elements so that those less than the pivot come before it and those greater come after.
3. **Recursion**: Recursively applies the same process to the sub-arrays of elements less than and greater than the pivot.
4. **Base Case**: Stops recursion when sub-arrays are small enough to be sorted directly.

## Binary Search
Binary Search is an efficient algorithm for finding an item in a sorted array. It works by:
1. **Dividing the Array**: Compares the target value to the middle element of the array.
2. **Narrowing the Search**: If the target is smaller, it continues the search in the left half; if larger, in the right half.
3. **Repeating**: This process is repeated on the new sub-array until the target is found or the sub-array size is reduced to zero.

Both algorithms optimize their respective tasks—sorting and searching—by systematically dividing and conquering.
