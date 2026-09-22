function twoSum(nums: number[], target: number): number[] {

    for (let i = 0; i < nums.length; i++) {
        for (let k = 1 + i; k < nums.length; k++) {
            if (nums[i] + nums[k] === target) {
                return [i, k];
            }
        }
    }

    return [0,0];
};