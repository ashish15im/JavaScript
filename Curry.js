const curry=function(fn){
	let arity=fn.length;
	return function f1(...args){
		if(args.length>=arity){
			console.log("args.length>=arity");
			return fn(...args);
		}else{
			return function f2(...moreArgs){
                               console.log("args.length<=arity"); 
				let newArgs=args.concat(moreArgs);
				return f1(...newArgs);
			}
		}
	};
};

const add=curry((a,b,c,d,e)=>a+b+c+d+e);
add(1,2,3,4,5);
console.log(add(1,2,3,4,5));
