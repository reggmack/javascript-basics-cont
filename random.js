function getRandomNumber( lower, upper ) {
	if ( isNaN(lower) || isNaN(upper) ) {
		throw new Error('Both arguments must be numbers');
	}
		return Math.floor(Math.random() * (upper - lower + 1 )) + lower;
}
console.log( getRandomNumber(1, 100) );
console.log( getRandomNumber(9, 24) );
console.log( getRandomNumber(1000, 20000) );



/*function getArea ( width, length, unit ) {
	var area = width * length;
	return area + " " + unit;
}
console.log( getArea( 10, 20, "inches" ) );*/