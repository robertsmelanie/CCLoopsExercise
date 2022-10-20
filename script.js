// Loops Exercise
// 1
for(let i = 1; i < 8; i++){
    console.log(i);
}
/*
1
2
3
4
5
6
7
*/
// 2

//
for(let i = 5; i < 26; i = i + 4){
    console.log(i);
}
/*
5
9
13
17
21
25
*/

// 3a
const wizards = ['Harry Potter', 'Herminone Granger', 'Ron Weasley'];
//3b
for (let i = 0; i < wizards.length; i++) {
    console.log(wizards[i]);
       
}
// or
//for(friends of wizards){
//    console.log(friends);
//}
/*
Harry Potter
Herminone Granger
Ron Weasley
*/

// 4a
let harryPotterMovies = 0;
// 4b
while (harryPotterMovies < 8) {
    harryPotterMovies++
    console.log(harryPotterMovies);
//    harryPotterMovies++;
    
}
//4c
/*
0
1
2
3
4
5
6
7

*/

// Bonus
// 5
const hogwartsHouses = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin'
];

// 5b
for (houses of hogwartsHouses){
    for (letter of houses){
        console.log(letter);
    }
}

//6a
const quote = [
    'Yer',
    'A',
    'Wizard',
    'Harry'
];

//6b
/*
let quoteLine = ``;
for(i=0; i < quote.length; i++){
    quoteLine = quoteline + quote[i] + ` `;
}
console.log(quoteLine);
*/
let magicQuote = ``;
for (i = 0; i < quote.length; i++){
    magicQuote += `${quote[i]}`;
}
magicQuote.trim();
console.log(magicQuote);

// 7 Inspired by fizzBuzz
//! rewatch this
for (i = 1; i <= 25; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('Expecto Patronum');
    } else if (i % 3 === 0){
        console.log('Expecto');
    } else if (i % 5 === 0){
        console.log('patronum');
    }else {
        console.log(i);
    }
}