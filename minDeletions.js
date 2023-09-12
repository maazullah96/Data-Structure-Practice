/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
    const al_map = {}
    const nu_map = new Map()
    console.log(s)
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        console.log(element)
        al_map
        al_map[element] = al_map[element] +1 || 1
        console.log(al_map) 
        // nu_map[]
    }
    for (const obj of Object.keys(al_map)) {
    //   console.log();
        const val = al_map[obj];
        if (!nu_map.has(val)) {
            nu_map.set(val,[])
        }
        const arr =nu_map.get(val)
        arr.push(obj);
        nu_map.set(val,arr)
    }
    nu_map
    al_map
    let count =0
    for (const x of nu_map.keys()) {
        console.log(x)
        const arr = nu_map.get(x);
        console.log(arr)
        if(arr.length >1){
            console.log(arr);
            while(arr.length>1){
              const elem = arr.pop();
              elem;
              console.log(al_map[elem]);
              nu_map;
              console.log(nu_map.has(al_map[elem]));
              al_map;
              nu_map;
              nu_map;
              while (nu_map.has(al_map[elem])) {
                nu_map;
                al_map;
                elem;
                console.log(al_map[elem]);
                al_map[elem]--;
                count += 1;
              }
              elem;
              if (al_map[elem] >0){
                  nu_map.set(al_map[elem], [elem]);

              } 
              console.log(al_map);
            }
        }
    }
    count
    return count

};


let s = "bbcebab";
minDeletions(s)