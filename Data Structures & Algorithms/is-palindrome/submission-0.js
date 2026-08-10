class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        let j = filtered.length - 1;
        for(let i = 0; i < filtered.length / 2; i++) {
        console.log('entered')
        if(filtered[i] != filtered[j]) return false
        j--
      }
      return true
    }

}
