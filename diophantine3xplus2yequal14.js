// Fill the regexp r so that the following
// code finds a solution to the diophantine equation:
//                   3x+2y=14
// That is, search for integers values of x and y satisfying the equation

const r = /.../

const fourteen = '1'.repeat(14)

const [_0, threes, _2, twos] = fourteen.match(r)

console.log(threes.length/3, twos.length/2)

// Using regular expressions, write a function: 
//               diophantine(a, b, c)
// that returns an array [x, y] containing a 
// solution to the diophantine equation
//               a x + b y = c
// or null if there is no such solution
