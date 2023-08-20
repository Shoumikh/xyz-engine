// @desc: Find MAX number of an given array
export const findMax = (inputArr) => {
  let listXMax = inputArr[0];

  for (let i = 0; i < inputArr.length; i++) {
    if (listXMax < inputArr[i]) {
      listXMax = inputArr[i];
    }
  }

  return listXMax;
};

// @desc: Find MIN number of an given array
export const findMin = (inputArr) => {
  let listXMin = inputArr[0];

  for (let i = 0; i < inputArr.length; i++) {
    if (listXMin > inputArr[i]) {
      listXMin = inputArr[i];
    }
  }

  return listXMin;
};
