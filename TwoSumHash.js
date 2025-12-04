const TwoSum=(nums,target)=>{
	const map=new Map();
	for( let i=0;i<nums.length;i++ ){
		const curr=nums[i];
		const need=target-curr;
		if(map.has(need)){
			return [map.get(need),i];
		}
	map.set(curr,i);
	}
}

console.log(TwoSum([2,3,4,4,5,6,7,8,9,20],15));
