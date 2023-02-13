function maxProfitDays(stockPrices) {
    //if (stockPrices.length === 1) return 0;
    //let min = stockPrices.indexOf(Math.min(...stockPrices));
    //let max = stockPrices.indexOf(Math.max(...stockPrices));
    /*if (buyDay > sellDay) {
      return maxProfitDays(stockPrices.slice(0, buyDay));
    }*/

    let maxProfit = 0;
    let buyDay = 0;
    let sellDay = 0;
    
    for (let i = 0; i < stockPrices.length - 1; i++) {
      for (let j = 1; j < stockPrices.length; j++) {
        const localProfit = stockPrices[j] - stockPrices[i];
        if (localProfit > maxProfit && i < j) {
          maxProfit = localProfit;
          buyDay = i;
          sellDay = j;
        }
      }
    }
    return [buyDay, sellDay];
  }
  
  const stockList = [17, 11, 60, 25, 150, 75, 2, 190];
  const stockList1 = [190, 11, 160, 25, 150, 75, 2, 17];
  const arr = [8,7,6,5,4,3,2,1];
  console.log(maxProfitDays(stockList));
  console.log(maxProfitDays(stockList1));
  
  console.log(maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]));
  console.log(maxProfitDays(arr));