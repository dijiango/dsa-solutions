//https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    let originals = [];
    for (let i = 0; i < nums.length; i++) {
        if (originals.includes(nums[i])){
            return true;
        } else {
            originals.push(nums[i]);
        }
    }
    return false;
};