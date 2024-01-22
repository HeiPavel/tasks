const compareVersion = (version1, version2) => {
    const revs1 = version1.split('.');
    const revs2 = version2.split('.');
    let i = 0;
    while (i < revs1.length || i < revs2.length) {
        const num1 = revs1[i] !== undefined ? Number(revs1[i]) : 0;
        const num2 = revs2[i] !== undefined ? Number(revs2[i]) : 0;
        i++;
        if (num1 === num2) continue;
        return num1 > num2 ? 1 : -1;
    }
    return 0;
}

const v11 = '1.01', v12 = '1.001';
const v21 = '2.5.33', v22 = '0.1'; 

console.log(compareVersion(v21, v22));