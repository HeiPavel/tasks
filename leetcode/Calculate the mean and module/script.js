function statsFinder(array) {
  // Write your code here
  const occurr = [];
  let occurrEl = 0;
  array.forEach((element, index, array) => {
    let counter = 0;
    array.slice(index + 1, array.length).forEach(innerElement => {
      if (element === innerElement) {
        counter++;
        occurrEl = element;
      }
    });
    if (occurr.length) {
        if (counter > occurr[0][1]) occurr[0] = [occurrEl, counter];
      } else {
        occurr[0] = [occurrEl, counter];
      }
  });
  return [array.reduce((first, sum) => first + sum)/array.length, occurr[0][0]];
};

const stFinder = (array) => {
  const obj = {};
  let mode = 0;
  let counter = 0;
  array.forEach((number, index, array) => {
   if (obj[number] === undefined) obj[number] = 0;
    if (array.slice(index + 1, array.length).includes(number)) {
      obj[number]++;
      if (obj[number] > counter) {
        counter = obj[number];
        mode = number;
      }
    }
  });
  if (!counter) mode = array[0];
  const mean = array.reduce((first, sum) => first + sum)/array.length;
  return [mean, mode];
}

function statsFinder1(array) {
  let mean = array.reduce((acc, el) => acc + el, 0) / array.length;
  let mode = array.reduce((a, b, i, arr) => {
    let occurance = arr.filter(elmnt => elmnt === b).length
    return occurance > a[1] ? [b, occurance] : a
  },[0,0])[0];
  return [mean, mode];
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300, 300, 400, 350, 350, 300]));
console.log(stFinder([500, 400, 375, 300, 350, 325]));
console.log(statsFinder1([500, 400, 375, 300, 350, 325]));