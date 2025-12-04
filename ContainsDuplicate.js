function containsDuplicate(nums){
	return new Set(nums).size !==nums.length;
}
console.log( containsDuplicate([1,2,3,4,1,5]));
