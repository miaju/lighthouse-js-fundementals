const range = function(start, end, step){
  const ar = [];
  if((isNaN(start)) || (isNaN(end)) || (isNaN(step)) || (end < start) || (step <= 0) ){
    return ar;
  }
  else {
    
    let counter = start;

    while(counter <= end){

      ar.push(counter);
      counter += step;

    }
  } return ar;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range('',5,1));
console.log(range(5,4,1));
console.log(range(5,10,0));
console.log(range(5,6,-1));
