const compareVersion = (version1, version2) => {
    const getNumbers = (ver) => {
        let num = '';
        const res = [];
        for (let i = 0; i <= ver.length; i++) {
            if (ver[i] === '.' || i === ver.length) {
                res.push(num ? Number(num) : 0);
            }
            if (ver[i] === '.') {
                num = '';
                continue;
            }
            if (!num && ver[i] == 0) continue;
            num += ver[i];
        }
        return res;
    }
    const revs1 = getNumbers(version1);
    const revs2 = getNumbers(version2);
    let i = 0;
    while (i < revs1.length || i < revs2.length) {
        const num1 = revs1[i] !== undefined ? revs1[i] : 0;
        const num2 = revs2[i] !== undefined ? revs2[i] : 0;
        i++;
        if (num1 === num2) continue;
        return num1 > num2 ? 1 : -1;
    }
    return 0;
}

const v11 = '1.01', v12 = '1.001';
const v21 = '2.5.33', v22 = '0.1'; 

console.log(compareVersion(v11, v12));