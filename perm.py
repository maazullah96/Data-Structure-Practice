# def fn(nums):
#     result = []
#     hash_set = set()

#     def solve(nums, temp):
#         if len(temp) == len(nums):
#             result.append(temp.copy())  # Create a copy of temp before appending to result
#             return

#         for i in range(len(nums)):
#             if nums[i] not in hash_set:
#                 hash_set.add(nums[i])
#                 temp.append(nums[i])
#                 solve(nums, temp)
#                 hash_set.remove(nums[i])
#                 temp.pop()

#     solve(nums, [])
#     return result

# print(fn([1, 2, 3]))



def permute(s, l, r):
    if l == r:
        print(''.join(s))
    else:
        for i in range(l, r+1):
            s[l], s[i] = s[i], s[l]   # Swap current element with the first element
            permute(s, l+1, r)       # Recursively generate permutations for the remaining elements
            s[l], s[i] = s[i], s[l]   # Backtrack, revert the swap

# Example usage:
string = "ABC"
n = len(string)
s = list(string)
permute(s, 0, n-1)