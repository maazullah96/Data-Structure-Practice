/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    

let map = new Map();

for (let i = 0; i < groupSizes.length; i++) {
  // console.log()
  const gSz = groupSizes[i];
  console.log(gSz);
  console.log(map.has(gSz));

  if (map.has(gSz)) {
    let getELem = map.get(gSz);
    let lastArr = getELem.groupSizes[getELem.groupSizes.length - 1];
    lastArr;
    console.log(getELem);
    gSz;
    if (lastArr.length === gSz) {
      console.log(getELem.groupSizes);
      getELem.groupSizes.push([i]);
    } else {
      console.log();
      map.set(gSz, getELem.groupSizes[getELem.groupSizes.length - 1].push(i));
    }
    // getELem+=1
    map.set(gSz, getELem);
  } else {
    map;
    map.set(gSz, { groupSizes: [[i]] });
  }
}
console.log(map);

console.log(map);

let final_results=[]
for (const x of map.entries()) {
    console.log()
    final_results.push(...x[1].groupSizes);

}
final_results
return final_results
};

// let groupSizes = [3, 3, 3, 3, 3, 1, 3];
groupSizes = [2, 1, 3, 3, 3, 2];
groupThePeople(groupSizes)
// Output: [[5], [0, 1, 2], [3, 4, 6]];
