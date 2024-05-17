var like1 = document.getElementById("btnLike1");
var like2 = document.getElementById("btnLike2");
var result1 = document.getElementById("count1");
var result2 = document.getElementById("count2");
function hitLike1() {
    console.log(result1.value);
    var c1 = parseInt(result1.value) + 1;
    console.log(c1);
    result1.textContent = c1.toString();
}
like1.addEventListener("click", hitLike1);
function hitLike2() {
    console.log(result2.value);
    var c2 = parseInt(result2.value) + 1;
    console.log(c2);
    result2.textContent = c2.toString();
}
like2.addEventListener("click", hitLike2);
