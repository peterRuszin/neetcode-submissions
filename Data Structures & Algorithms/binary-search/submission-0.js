class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let mid = Math.round(nums.length / 2);
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            if(nums[mid] === target) return mid
            else if(nums[mid] < target) left = mid + 1
            else if (nums[mid] > target) right =  mid - 1
            mid = Math.round((right + left) / 2)
        }
        return -1
    }
}
