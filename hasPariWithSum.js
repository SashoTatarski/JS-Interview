const hasPairWithSum = (nums, target, left = 0, right = nums.length - 1) => {
  if (left >= right) return false;
  
  const pair = nums[left] + nums[right];
  if (pair === target) return true;
  if (pair > target) return false;
 
  return hasPairWithSum(nums, target, ++left, right);
};

console.log(hasPairWithSum([1, 2, 4, 4], 8));

// ------------------------------------------------------- //

// const hasPairWithSumUnorderedArray = (nums, target) => {
//     const comp = new Set();
  
//     for (const value of nums) {
//       if (comp.has(value)) return true;
//       comp.add(target - value);
//     }
   
//     return false;
//   };
  
//   console.log(hasPairWithSumUnorderedArray([ 1, 2, 3, 9], 8));