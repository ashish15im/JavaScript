const isSubsequence=(s,t)=>{
	let p=0;
	for(let ch of t){
		if(ch===s[p])p++;
	}
	return p===s.length;
};

console.log(isSubsequence("Hell","Hello World"));
