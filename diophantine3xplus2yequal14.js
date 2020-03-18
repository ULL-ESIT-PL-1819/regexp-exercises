// Fill the regexp r iso that the following
// code finds a solution to the diophantine equation:
//                   3x+2y=14
// That is, search for integers values of x and y satisfying the equation

const r = /.../

const fourteen = '1'.repeat(14)

const [_0, threes, _2, twos] = fourteen.match(r)

console.log(threes.length/3, twos.length/2)
