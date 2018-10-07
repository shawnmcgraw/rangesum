function sumAll() {
  var startTxt = document.getElementById('start').value; // first int in the array
  var endTxt = document.getElementById('end').value;     // last int in the array
  var start = parseInt(startTxt); // convert strings to numbers
  var end = parseInt(endTxt);
  var createdArray = [start]; // initialize the array
  var arrSum = createdArray[0];  // this number will be iterated

  if (start < end) {
    while(start + 1 <= end){
      createdArray[createdArray.length] = start += 1;
    }
    for (i = 1; i < createdArray.length; i++) {
      arrSum += createdArray[i];
    }
  } else if (start > end) {
    while(start > end) {
      createdArray[createdArray.length] = start -= 1;
    }
    for (i = 1; i < createdArray.length; i++) {
      arrSum += createdArray[i];
    }
  } else {
    arrSum = 'ERROR';
  }

  document.getElementById('arrOut').innerHTML = "Array: " + createdArray;
  document.getElementById('totOut').innerHTML = "Sum: " + arrSum;
  //console.log(createdArray);
  //console.log(arrSum);
}
