//给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
//请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let ans = 0;
    for(const num of nums){
        if(set.has(num - 1)){
            continue;
        }
        let y = num + 1;
        while(set.has(y)){
            y++;
        }
        ans = Math.max(ans,y - num);
    }
    return ans;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums)); // 输出: 4 (因为最长的连续序列是 [1, 2, 3, 4])