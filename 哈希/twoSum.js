// 我需要把全部的组合都列出来，而不是只返回一个组合
var twoSum = function(nums, target) {
    const map = new Map();
    const result = [];
    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if (map.has(complement)){
            result.push([map.get(complement), i]);
        }
        map.set(nums[i], i);
    }
    return result;
};
const nums = [2, 7, 11, 15, 2];
const target = 9;
console.log(twoSum(nums, target)); // 输出: [[0, 1], [0, 4], [4, 1]]

