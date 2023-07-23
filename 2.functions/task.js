function getArrayParams(...arr) {
  let min, max, sum;
  min = arr[0];
  max = arr[0];
  sum = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (min > arr[i]) {
        min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sum = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; ++i) {
    if (min > arr[i]) {
        min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 == 0) {
      sumEven += arr[i];
    }
    else {
      sumOdd += arr[i];
    }
  }
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEven = 0;
  let numberEven = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % 2 == 0) {
      sumEven += arr[i];
      numberEven += 1;
    }
  }
  return sumEven / numberEven;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  let f;
  for (let i = 1; i < arrOfArr.length; ++i) {
    f = func(...arrOfArr[i]);
    if (maxWorkerResult < f) {
      maxWorkerResult = f;
    }
  }
  return maxWorkerResult;
}

