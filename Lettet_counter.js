let word = prompt("Enter text: ");
let letterCount = {};
for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (letterCount[char]) {
            letterCount[char]++;
    } else{
            letterCount[char] = 1;
    }
}
console.log(letterCount)