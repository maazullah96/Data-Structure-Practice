def fn(nums, temp):
   if len(temp) == len(nums):
      result.append(temp.copy())  # 
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
