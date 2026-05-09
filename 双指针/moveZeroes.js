// var moveZeroes = function(nums) {
//     let x = 0;
//     for(let y = 0; y < nums.length; y++){
//         if(nums[y] !== 0){
//             [nums[x], nums[y]] = [nums[y], nums[x]];
//             x++;
//         }
//     }
// };

var moveZeroes = function(nums) {
    let idx = 0;
    for(const x of nums){
        if(x !== 0){
            nums[idx++] = x;
        }
    }
    nums.fill(0, idx);
    return nums;
};

const nums = [0,1,0,3,12];
console.log(moveZeroes(nums)); // 输出: [1, 3, 12, 0, 0]