class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      if(s.length % 2 === 1) return false
      const opening = new Set(['(', '{', '['])
      let pairs = new Map([
         ['(', ')'],
         ['{', '}'],
         ['[', ']']
        ]
      )
      let stack = []
      for(let i = 0; i < s.length ; i++) {
        if(opening.has(s[i])) stack.push(s[i])
        else if (s[i] === pairs.get(stack[stack.length - 1])) stack.pop()
        else return false
      } 
       return stack.length === 0;
    } 
}
