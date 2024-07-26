let marr = [4, 2, 5, 1, 3];
let tmp =0;
for (let i = 0; i < marr.length; i++) {
    for (let j = 0; j < marr.length - i; j++) {
        if (marr[j] > marr[j + 1]) {
            tmp = marr[j];
            marr[j] = marr[j + 1];
            marr[j + 1] = tmp;
        }
    }
}
console.log(marr)
let index = -1
let number = prompt(" -")
for (let i =0 ;i <marr.length;i++){
    if(marr[i] === number){
        index =i
        break
    }
}
console.log(index);