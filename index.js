const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function likeEvent1() {
  let countLike1 = parseInt(count1.value) + 0
  count1.textContent = countLike1.toString()
}
btnLike1.addEventListener("click", likeEvent1)
