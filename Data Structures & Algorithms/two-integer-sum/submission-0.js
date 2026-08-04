class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            const neededVal = target - nums[i]
            if(map.has(neededVal)) return [map.get(neededVal), i]
            map.set(nums[i], i)
        }
    }
}
