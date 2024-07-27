function findSingleElement(nums) {
    let uniqueElement = 0;
    for (let num of nums) {
        uniqueElement ^= num;
    }
    return uniqueElement;
}
//using XOR method
console.log(findSingleElement([2, 2, 1])); 
console.log(findSingleElement([4, 1, 2, 1, 2])); 
console.log(findSingleElement([1])); 