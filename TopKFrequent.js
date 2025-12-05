function topKFrequent(nums,k){
	const freq=new Map();
	for (let n of nums){
		freq.set(n,(freq.get(n)||0)+1);
	}
	const buckets=Array(nums.length+1).fill().map(()=>[]);
	console.log("Buckets:",buckets);
	for(let[nums,count]of freq.entries()){
		buckets[count].push(nums);
		console.log("Filled Buckets",buckets);
	}
	const result=[];
	for ( let i=buckets.length-1;i>=0&&result.length<k;i-- ){
		for(let num of buckets[i]){
			result.push(num);
			if(result.length===k){
				return result;
			}
		}
	}
	return result;
}
console.log(topKFrequent([1,2,3,4,1,5],2);)
