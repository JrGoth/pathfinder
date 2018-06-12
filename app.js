var diceBox = document.querySelector('#diceBox')
var numOfDice = document.querySelector('#numOfDice')
var dieType = document.querySelector('#dice')
var roll = document.querySelector("#roll")
var sum = []
roll.addEventListener('click', function(e){
var diceNum = parseInt(numOfDice.value)
var result = 0
while (diceBox.firstChild) {
    diceBox.removeChild(diceBox.firstChild);
}
for(var i = 1; i <= diceNum ; i++){
var y = RandomNumGen(dieType.value)
var x = i + ' You rolled a ... ' + y
appendText(diceBox, x)
sum.push(y)

}
for(var i = 0; i < sum.length; i++){
  result += sum[i]
}
appendText(diceBox,"The sum of all the dice are ... " + result)
diceNum = 0
result = 0
sum = []
})

function RandomNumGen(x){
  var res = (Math.random() *x) + 1| 0
  return res
}

function appendText(parent,text){
  var t = document.createTextNode(text)
  var br = document.createElement('br')
  parent.appendChild(t)
  parent.appendChild(br)
  return t
}
