const like1 = document.getElementById("btnLike1");
const dislike1 = document.getElementById("btnDislike1");
const count1 = document.getElementById("count1");
const remarks1 = document.getElementById("remarks1");

function likeEvent1() {
    let countLike1 = parseInt(count1.value) + 1;
    count1.textContent = countLike1.toString();
    if (parseInt(count1.value) <= 5) {
        remarks1.textContent = "Kulang sa paligo";
    } else if (parseInt(count1.value) > 5) {
        remarks1.textContent = "Pinagpala ng Maykapal sa kagwapuhan";
    }
}

function dislikeEvent1() {
    if (parseInt(count1.value) > 0) {
        let countLike1 = parseInt(count1.value) - 1;
        count1.textContent = countLike1.toString();
        if (parseInt(count1.value) <= 5) {
            remarks1.textContent = "Kulang sa paligo";
        } else if (parseInt(count1.value) > 5) {
            remarks1.textContent = "Pinagpala ng Maykapal sa kagwapuhan";
        }
    }
}

like1.addEventListener("click", likeEvent1);
dislike1.addEventListener("click", dislikeEvent1);

