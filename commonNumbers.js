let numbers = {};
let results = [];

function interceptor(...arrays) {
  arrays.forEach((numberArray => {
    numberArray.forEach(numberKey => {
      if (!numbers.hasOwnProperty(numberKey)) {
        numbers[numberKey] = 1;
      } else {
        numbers[numberKey] = numbers[numberKey] + 1;
      }
    });
  }));

  calculateResults(arrays.length);
}

function calculateResults(arrayLen) {
  Object.keys(numbers).forEach(n => {
    if (numbers[n] % arrayLen === 0) {
      results.push(n);
    }
  });
}

interceptor([1,2,3], [3,2,1], [1,2,5,9]);
