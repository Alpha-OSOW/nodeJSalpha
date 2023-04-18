const _ = require("lodash");

// solution lodash et sa méthode random
const r = [];
for(let i = 0 ; i < 10 ; i++){
    r.push( _.random(0,100) )
}

console.log(r);

// solution sans librairie
const r2 = [];
for(let i = 0 ; i < 10 ; i++){
    r2.push( Math.round(Math.random() * 100 ) )
}
console.log(r2);

// ok
console.log(
    _.fill(Array(10),0)
    .map(el=>_.random(0,100))
)

// autre solution possible 
console.log( Array.from( new Array(10) , function(){ return _.random(0,100) } ))
