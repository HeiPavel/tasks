const findCenter = (edges) => {
    let check = true;
    let node = 0;
    let i = 1;
    let center = 0;
    while (check) {
        if (edges[i].includes(edges[0][node])) {
            if (!center) center = edges[0][node];
            i++;
        } else {
            node += 1;
            i = 1;
            center = 0;
        }
        if (i === edges.length || node > 1) check = false;
    }
    return center;
};

const arr = [[1,2],[5,1],[1,3],[1,4],[6,7],[1,8],[1,9]];
const arr1 = [[1,2],[2,3],[4,2]];

console.log(findCenter(arr1));