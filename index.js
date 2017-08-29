function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplier){
  return function(valueToBeMultipliedBy) {
        return multiplier * valueToBeMultipliedBy
    }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(valueOne,valueTwo){
  return valueOne * valueTwo

}

var doublerWithBind = multiplier.bind(null,2);
var triplerWithBind = multiplier.bind(null,3);
