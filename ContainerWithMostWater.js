let maxArea=(height)=>{
	let left=0;
	let right=height.length-1;
	let max=0;
	while(left<right){
		const width=right-left;
		const ht=Math.min(height[left,height[right]]);
		const area=width*ht;
		max=Math.max(max,area);
		//Move the shorter line
		if(height[left<height[right]])left++
		else right--;
	}
	return max;
}

console.log(maxArea([0,1,2,3,4,5,0]));
