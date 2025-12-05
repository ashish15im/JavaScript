const goupAnagrams=(strs)=>{
	const map=new Map();
	for(let word of strs){
		const count=new Array(26).fill(0);
		for(let ch of word){
			count[ch.charCodeAt(0)-97]++;
		}
		const key=count.join("#");
		if(!map.has(key))map.set(key,[]);
		map.get(key).push(word);
	}
	return Array.from(map.values());
};
console.log(goupAnagrams(["eat","tan","man","nam","kill","llik"]));
