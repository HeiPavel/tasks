const candy = (ratings) => {
    let res = 0;
    const rec = (i, prev) => {
        if ((ratings[i] <= ratings[i - 1] || ratings[i - 1] === undefined) && 
            (ratings[i] <= ratings[i + 1] || ratings[i + 1] === undefined)) {
                res += 1;
                if (i + 1 < ratings.length) rec(i + 1, 1);
                return 1;
        }
        let currentAmount = 0;
        if (ratings[i] > ratings[i - 1] && ratings[i] > ratings[i + 1]) {
            const nextAmount = rec(i + 1, 1);
            currentAmount = (prev + 1 > nextAmount) ? prev + 1 : nextAmount + 1;
        } else {
            if (ratings[i] > ratings[i - 1]) {
                currentAmount = prev + 1;
                if (i + 1 < ratings.length) rec(i + 1, currentAmount);
            }
            if (ratings[i] > ratings[i + 1]) currentAmount = 1 + rec(i + 1, 1);
        }
        res += currentAmount;
        return currentAmount;
    }
    rec(0, 0);
    return res;
};