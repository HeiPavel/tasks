const compareVersion = (version1, version2) => {
    const revs1 = version1.split('.');
    const revs2 = version2.split('.');
    while (revs1.length || revs2.length) {
        const num1 = revs1.length ? Number(revs1.shift()) : 0;
        const num2 = revs2.length ? Number(revs2.shift()) : 0;
        if (num1 === num2) continue;
        return num1 > num2 ? 1 : -1;
    }
    return 0;
}

const v11 = '1.01', v12 = '1.001';
const v21 = '2.5.33', v22 = '0.1'; 

console.log(compareVersion(v21, v22));