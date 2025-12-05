function longestConsequtive(nums){
	const set = new Set(nums);
	let longest=0;
	for(let num of set){
		if(!set.has(num-1)){
			let current=num;
			let length=1;
			while(set.has(current+1)){
				current++;
				length++;
			}
			longest=Math.max(longest,length);
		}
	}
	return longest;
}
console.log(longestConsequtive([1,2,6,7,1,2,3,4]));

