function countDigit(digit, range){

if(Number.isInteger(range)===false){
	var tmp = parseInt(range);
	range = tmp;
}

var counter=0;

	for(i=range; i!=0; i--){
		var str=i.toString();
		var res=str.search(digit.toString());

		if(res!=-1){
			counter++;
			//console.log("str="+str);
		}

	}
console.log(counter);
}

