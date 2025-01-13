const findMinDifference = (timePoints) => {
  let min = Infinity

  timePoints = timePoints.map(point => {
    const time = point.split(':'), hours = Number(time[0]), minutes = Number(time[1])
    return  hours * 60 + minutes
  })

  timePoints.sort((a, b) => a - b)

  for (let i = 1; i < timePoints.length; i++) {
    min = Math.min(min, timePoints[i] - timePoints[i - 1])
  }

  min = Math.min(1440 + timePoints[0] - timePoints.at(-1), min)

  return min
}

const t1 = ["12:12","00:13"] // 719

console.log(findMinDifference(t1))