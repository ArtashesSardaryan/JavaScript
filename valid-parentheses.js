function findBracket() {
    let s = "{}()[]";
    if (s.length % 2 === 1) {
        return false;
    }
    
    let mstack = [];
    let mobj = {"{": "}", "(": ")", "[": "]"};
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in mobj) {
            mstack.push(s[i]);
        } else {
            if (mstack.length === 0) {
                return false;
            }
            if (mobj[mstack[mstack.length - 1]] !== s[i]) {
                return false;
            } else {
                mstack.pop();
            }
        }
    }
    
    return mstack.length === 0;
}

console.log(findBracket()); 