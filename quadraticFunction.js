function quadratic(a, b, c)
{
	/*
		test #1: quadratic(1, 9, 14)  -> d>0, x1= -7, x2= -2.
		test #2: quadratic(5, 10, 5)  -> d=0, x1= x2 = -25.
		test #3: quadratic(15, 9, 14) -> d<0
	*/
	var a = a;
	var b = b;
	var c = c;
	if(a !== 0)
	{
		var d = Math.pow(b, 2) - 4 * a * c;
			
		if(d === 0)
		{
			var x1 = x2 = -b/2*a;
		}
		
		else if(d > 0)
		{
			var x1 = (-b - Math.sqrt(d))/2*a;
			var x2 = (-b + Math.sqrt(d))/2*a;
		}
		
		else 
		{
			console.log('There is not solution for negative discriminant!');
		}
		
		if(d >= 0)
		{
			console.log('quadratic equation: ' + a + 'x^2 + ' + b + 'x + ' + c + '\nx1 = ' + x1 + ', x2 = ' + x2 + '.');
		}
		
	} 
	
	else
	{
		console.log('It is not quadratic equation!');
	}
}


