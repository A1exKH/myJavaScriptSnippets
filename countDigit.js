function countDigit(digit, range){
var start = new Date().getTime();

var counter=0;

	for(i=digit; i<=range; i++){
		var str=i.toString();
		var res=str.search(digit.toString());

		if(res!=-1){
			counter++;
			//console.log("str="+str);
		}

	}
console.log("Digit "+digit+" appears in a range from 1 to "+range+": "+counter+" times.");
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time+"ms.");
}

countDigit(5, 1000000); //test

