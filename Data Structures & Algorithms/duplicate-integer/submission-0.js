class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let storeNums = new Map();
        
        for (let i = 0; i <= nums.length; i++) {

            if(storeNums.has(nums[i])) {
                return true
            } 
            
            storeNums.set(nums[i], i)
        }
        return false;
    }
}
