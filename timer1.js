let inputArray = process.argv.slice(2);

const stringToNumber = (inputArray) => {
  let timesArray = [];
  for (let eachEntry of inputArray) {
    if (Number(eachEntry) > 0) {
      timesArray.push(Number(eachEntry));
    } else {
      console.log(`${eachEntry} is not a valid input`);
    }
  }
  return timesArray;
};

const timer = (inputArray) => {

  const timesArray = stringToNumber(inputArray);
  for (let eachTime of timesArray)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, eachTime * 1000);

};

timer(inputArray);