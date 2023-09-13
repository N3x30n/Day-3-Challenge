//if my command to run this file is
//    node challenge.js jared collier

const firstVar = process.argv[2] //firstVar will be the string 'jared'
const secondVar = process.argv[3] //lastVar will be the string 'collier'

// console.log(firstVar, secondVar)

//instructions
//use what you learned yesterday in combination with Google to figure
//out the following sections:

//part 1
//if firstVar is equal to 'foo'
//print 'bar'
//unless secondVar is equal to 'baz'
//in which case you will simply print 'bat'

// if(secondVar === "baz"){
//     console.log('bat')
// } else if(firstVar === 'foo'){
//     console.log('bar')
// }

//part 2
//if firstVar is a number which is greater than 5,
//print 'greater than 5!'
//hint: you'll need to know how to turn a string data type into a number data type

// if(parseInt(firstVar) > 5){
// console.log('greater than 5!')
// }

//part 3
//if firstVar or secondVar contains the letter 'e', print 'eeeeeee'
// 
// if (firstVar.includes('e') || secondVar.includes('e')){
//     console.log('eeeeeeee')
// }

//part 4
//if the secondVar contains the letter 'a' once, print 'eh?'
//but if it contains letter 'a' multiple times, print 'eh!'

// let counter = 0;

// for (let i = 0; i < secondVar.length; i++){ 
//     if (secondVar[i] === "a"){
//         counter += 1      
//     }
// }
// if (counter === 1){
//     console.log('eh?')
// } else if(counter > 1){
//     console.log('eh!')
// }

//part 5
//assume the user can put in as many command line arguments as they want.
//starting with the argument after the one saved into secondVar (if it exists),
//print each argument backwards.
//so the command
//    node challenge.js foo bar baz bat
// would print out
//    'zab'
//    'tab'

const thirdVar = process.argv[4];
const fourthVar = process.argv[5];

console.log(thirdVar.split('').reverse().join(''))
console.log(fourthVar.split('').reverse().join(''))

