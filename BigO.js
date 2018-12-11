/*
    - Time Complexity: BigO      
        Object: 
          insert, removal, change = O(1)
          find a value = O(n)
          .keys(),.values(),.entries() = O(n)
          .hasOwnProperty() = O(1) -> pass in a key and see if it exist
        Arrays:
          find element = O(1)
          insert,removal = depends where it is, to the end is O(1), to the beginning has reindex
          push, pop = O(1)
          shift, undhift, concat, slice, splice, foreach, map, filter,reduce = O(n)
          Sort = O(n*logn)



    - Space Complexity(auxiliary space complexity)
        recursion concerins with space complexity 
        most preimitive are constant space (booleans, number, undefined)
        String: O(n) space 
        Object: O(n) where n is the number of keys

*/