var md = document.querySelector('.md');
var mdbtn = document.querySelector('.mdbtn');
var close = document.querySelector('.close');
console.log(typeof mdbtn);
mdbtn.onclick = function(){
  md.classList.add('show');
}
close.onclick = function(){
  md.classList.remove('show');
}
