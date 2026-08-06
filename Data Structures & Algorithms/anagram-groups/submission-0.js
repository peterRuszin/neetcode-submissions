class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const buckets = new Map();
      const sorted = strs.map(str => str.split('').sort().join(''))
      for(let i = 0; i < sorted.length; i++) {
        if (!buckets.has(sorted[i])) buckets.set(sorted[i], []);
        buckets.get(sorted[i]).push(strs[i]);
      }

      return [...buckets.values()]
    }
}
