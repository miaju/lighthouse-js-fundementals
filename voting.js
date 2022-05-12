const chooseStations = function (stations,goodStations = []) {

  if(stations.length === 0){
    return goodStations;
  }
  for(const s of stations){
    if(s[1] >= 20 && s.length === 3 && ((s[2] === 'school') || (s[2] === 'community centre'))){
      goodStations.push(s[0]);
    }
  }
  return goodStations;
}


let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
]

console.log(chooseStations(stations));

goodStations = [];

stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
]

console.log(chooseStations(stations));
