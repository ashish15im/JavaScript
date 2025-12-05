function productExceptSelf(nums){
	const result=Array(nums.length).fill(1);
	console.log(result);
	let left=1;
	for(let i=0;i<nums.length;i++){
		result[i]=left;
		left*=nums[i];
	}
	//Right product
	let right=1;
	for(let i=nums.length-1;i>=0;i--){
		result[i]*=right;
		right*=nums[i];
	}
	return result;

}
console.log(productExceptSelf([1,2,3,4,5]));
