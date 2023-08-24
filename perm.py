def fn(nums):
    result = []
    hash_set = set()

    def solve(nums, temp):
        if len(temp) == len(nums):
            result.append(temp.copy())  # Create a copy of temp before appending to result
            return

        for i in range(len(nums)):
            if nums[i] not in hash_set:
                hash_set.add(nums[i])
                temp.append(nums[i])
                solve(nums, temp)
                hash_set.remove(nums[i])
                temp.pop()

    solve(nums, [])
    return result

print(fn([1, 2, 3]))