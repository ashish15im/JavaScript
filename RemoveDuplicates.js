function Duplicates(nums){
	if(nums.length===0)return 0;
	let j=0;
	for( let i=1;i<nums.length;i++ ){
		if(nums[i]!==nums[j]){
			j++;
			nums[j]=nums[i];
		}
	}
	return nums.slice(0,j+1);
}

console.log(Duplicates([1,2,3,4,5]));

