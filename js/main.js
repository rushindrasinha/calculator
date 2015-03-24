/*=================RS
List Of All Variables
RS=================*/

	var clear = document.getElementById('aclear');
	var zero = document.getElementById('0');
	var one = document.getElementById('1');
	var two = document.getElementById('2');
	var three = document.getElementById('3');
	var four = document.getElementById('4');
	var five = document.getElementById('5');
	var six = document.getElementById('6');
	var seven = document.getElementById('7');
	var eight = document.getElementById('8');
	var nine = document.getElementById('9');
	var multiply = document.getElementById('multiply');
	var divide = document.getElementById('divide');
	var add = document.getElementById('add');
	var subtract = document.getElementById('subtract');
	var decimal = document.getElementById('decimal');
	var getDoc = document.getElementById('input');
	var calcExpress = '';




/*===========RS
Clear all input
RS===========*/

	clear.addEventListener('click', function () {
		calcExpress = '';
		getDoc.value = calcExpress;
	})



/*===============================================================RS
Functions to push the value of the clicked button to the input slot
RS===============================================================*/
	zero.addEventListener('click', function () {
		calcExpress += '0';
		getDoc.value = calcExpress;
	});

	one.addEventListener('click', function () {
		calcExpress += '1'
		getDoc.value = calcExpress;
	});

	two.addEventListener('click', function () {
		calcExpress += '2'
		getDoc.value = calcExpress;
	});

	three.addEventListener('click', function () {
		calcExpress += '3'
		getDoc.value = calcExpress;
	});

	four.addEventListener('click', function () {
		calcExpress += '4'
		getDoc.value = calcExpress;
	});

	five.addEventListener('click', function () {
		calcExpress += '5'
		getDoc.value = calcExpress;
	});

	six.addEventListener('click', function () {
		calcExpress += '6'
		getDoc.value = calcExpress;
	});

	seven.addEventListener('click', function () {
		calcExpress += '7'
		getDoc.value = calcExpress;
	});

	eight.addEventListener('click', function () {
		calcExpress += '8'
		getDoc.value = calcExpress;
	});

	nine.addEventListener('click', function () {
		calcExpress += '9'
		getDoc.value = calcExpress;
	});

	multiply.addEventListener('click', function () {
		calcExpress += ' * '
		getDoc.value = ' * ';
	});

	divide.addEventListener('click', function () {
		calcExpress += ' / '
		getDoc.value = ' / ';
	});

	add.addEventListener('click', function () {
		calcExpress += ' + '
		getDoc.value = ' + ';
	});

	subtract.addEventListener('click', function () {
		calcExpress += ' - '
		getDoc.value = ' - ';
	});

	// equal.addEventListener('click', function () {
	// 	getDoc.value = test(calcExpress);
	// });


/*========================================================RS
Addition / Subtraction / Multiplication / Division Functions
RS========================================================*/
// function test(calcExpress) {
// 	return new Function('return ' + calcExpress)();
// };
var add = function (x,y) {
	return (+x) + (+y);
}

var subtract = function (x,y) {
	return x - y;
}

var multiply = function (x,y) {
	return x * y;
}

var divide = function (x,y) {
	return x / y;
}


equal.addEventListener('click', function() {
	var arrayAnswer = calcExpress.split(' ');
	if (arrayAnswer[1] === ('+')) {
		var boom = add(arrayAnswer[0],arrayAnswer[2]);
		calcExpress = '';
		calcExpress += boom
		getDoc.value = calcExpress;
	}

	else if (arrayAnswer[1] === ('-')) {
		var boom = subtract(arrayAnswer[0],arrayAnswer[2]);
		calcExpress = '';
		calcExpress += boom
		getDoc.value = calcExpress;
	} 

	else if (arrayAnswer[1] === ('*')) {
		var boom = multiply(arrayAnswer[0],arrayAnswer[2]);
		calcExpress = '';
		calcExpress += boom
		getDoc.value = calcExpress;
	}

	else if (arrayAnswer[1] === ('/')) {
		var boom = divide(arrayAnswer[0],arrayAnswer[2]);
		calcExpress = '';
		calcExpress += boom
		getDoc.value = calcExpress;
	}

})










