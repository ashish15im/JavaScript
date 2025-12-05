const findMaxAverage=(nums,k)=>{
	let sum=0;
	//initial window sum
	for(let i=0;i<k;i++){
		sum+=nums[i];
	}
	let maxSum=sum;
	//slide the window
	for(let i=k;i<nums.length;i++){
		sum+=nums[i]-nums[i-k];
		//add new ,remove old
		maxSum=Math.max(maxSum,sum);
	}
	return maxSum/k;
}
console.log(findMaxAverage([1,2,3,4,5,-8,-9,1,2,3,4,5,6,7,8,-10],4))
