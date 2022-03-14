let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre'],
]
const chooseStations = function (stations) {
  // Your code in here ...
  let venues = []
  for (const station of stations) {
    const capacity = station[1]
    const type = station.includes("school") || station.includes("community centre")
    if (capacity >= 20) {
      if(type){
        venues.push(station[0])
      }
    }
  }
  return venues
}

console.log(chooseStations(stations))

/* 
AssertionError: expected [ Array(2) ] to deeply equal [ 'Bright Lights Elementary' ]
    at s.f (https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.min.js:1:4255)
    at s.e.<computed> [as equal] (https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.min.js:1:25301)
*/
