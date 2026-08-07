class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const freq = new Map();
      for(let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) +1)
      }
      const buckets = Array.from({ length: nums.length + 1 }, () => []);
      for (const [value, count] of freq) {
        buckets[count].push(value)
      }
      let result = []
      let count = 0

      for(let i = buckets.length -1; i >= 0; i --) {
        if(count === k) return result
        if(buckets[i].length === 0) continue
        buckets[i].forEach((num) => {
          result.push(num)
          count++
        })
      }
    }
}
