var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var addNum = document.getElementById("add");
var subNum = document.getElementById("sub");
var mulNum = document.getElementById("mul");
var divNum = document.getElementById("div");
var modNum = document.getElementById("mod");
var sum = document.getElementById("sum");
var equalTo = document.getElementById("equal");
var clear = document.getElementById('clear')
var decimal = document.getElementById('decimal')
var zero = document.getElementById('zero')



num1.addEventListener("click", ($event) => {
  sum.value += num1.value;
});
addNum.addEventListener("click", ($event) => {
    sum.value += (addNum.value);
  });
num2.addEventListener("click", ($event) => {
    sum.value += num2.value;
});
num3.addEventListener("click", ($event) => {
  sum.value += num3.value;
});
num4.addEventListener("click", ($event) => {
  sum.value += num4.value;
});
num5.addEventListener("click", ($event) => {
  sum.value += num5.value;
});
num6.addEventListener("click", ($event) => {
  sum.value += num6.value;
});
num7.addEventListener("click", ($event) => {
  sum.value += num7.value;
});
num8.addEventListener("click", ($event) => {
  sum.value += num8.value;
});
num9.addEventListener("click", ($event) => {
  sum.value += num9.value;
});

subNum.addEventListener("click", ($event) => {
  sum.value += subNum.value;
});
mulNum.addEventListener("click", ($event) => {
  sum.value += mulNum.value;
});

modNum.addEventListener("click", ($event) => {
  sum.value += modNum.value;
});
divNum.addEventListener("click", ($event) => {
  sum.value += divNum.value;
});

equalTo.addEventListener("click", ($event) => {
  var total = sum.value;
  var totalSum = eval(total);
    sum.value = totalSum;
});
clear.addEventListener("click", ($event) => {
  sum.value = null;
});
decimal.addEventListener("click", ($event) => {
  sum.value += decimal.value;
});
zero.addEventListener("click", ($event) => {
  sum.value += zero.value;
});