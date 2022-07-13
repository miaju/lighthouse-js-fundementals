const judgeVegetable = function(vegetables, metric){
  let max = vegetables[0];

  for(let i of vegetables){

    if(i[metric] > max[metric]){

      max = i;
    }
  }

  return max.submitter;
}

vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
let metric = 'd'
console.log(judgeVegetable(vegetables, metric))
