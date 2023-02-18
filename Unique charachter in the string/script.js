const uniqueCharachters = string => {
    if (!string.length) throw new Error('No string inputed');
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] == string[j]) return false;
        }
    }
    return true;
}

console.log(uniqueCharachters('jhgfresdg'));