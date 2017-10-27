function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  //access each element li that is part of an element ul class='ranked-list'
  //turn each value into a number with parseInt()
  //add n to each value
  //to access each desired element I need to use
  const rankings = document.querySelectorAll('.ranked-list li')
  for (let i=0; i<rankings.length; i++) {
    rankings[i].innerHTML = parseInt(rankings[i].innerHTML) + n;
  }
}
function deepestChild() {
  
}
