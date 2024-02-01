
let num1 = 93;
let num2 = 93.00;

let num3 = 987e8;		// 98700000000
let num4 = 987e-8;		// 0.00000987

let num5 = 999999999999999;		// remains as 999999999999999
let num6 = 9999999999999999;	// rounded up to 10000000000000000


// Other values
Infinity
-Infinity
NaN


let num7 = 5 / 0;	// will return Infinity
let num8 = -5 / 0;	// will return -Infinity

let x = 20 / "Shark";	// x will be NaN

let y = 20 / "5";	// y will be 4

// Nature of `NaN`


let a = NaN;
let b = 37;
let c = a + b; 	// c will be NaN