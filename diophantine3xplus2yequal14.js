// Fill the regexp r to find a Diophantine Solution to the equation:
//                   3x+2y=14

const r = /.../

const fourteen = '1'.repeat(14)

const [_0, threes, _2, twos] = fourteen.match(r)

console.log(threes.length/3, twos.length/2)
