class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const positions = new Map();
    
        for (let i = 0; i < nums.length; i++) {
            if(positions.has(target - nums[i])) {
                return [positions.get(target - nums[i]), i];
            }
            positions.set(nums[i], i);
        }
        
        return positions;
    }
}
