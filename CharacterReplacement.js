const characterReplacement=(s,k)=>{
	let freq={};
	let left=0;
	let maxFreq=0;
	let maxLen=0;
	for( let right=0;right<s.length;right++ ){
		let ch=s[right];
		freq[ch]=(freq[ch]||0)+1;
		maxFreq=Math.max(maxFreq,freq[ch]);
		//if replacements needed>k , shrink window
		while((right-left+1)-maxFreq>k){
			freq[s[left]]--;
			left++;
		}
		maxLen=Math.max(maxLen,right-left+1);
	}
	return maxLen;
}
console.log(characterReplacement("hello World",2));
