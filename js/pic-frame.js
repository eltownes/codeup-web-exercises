
const butn1 = document.querySelector("#btn1");
butn1.addEventListener("click", function () {
    swap("#p1","#p2")
})

const butn2 = document.querySelector("#btn2");
butn2.addEventListener("click", function () {
    const side = Math.random() < 0.5 ? "#p1" : "#p3" // 0 - left , 1 - right
    swap("#p2",side)
})

const butn3 = document.querySelector("#btn3");
butn3.addEventListener("click", function () {
    swap("#p3","#p2")
})

function swap(p1,p2){
    const tmp = document.querySelector(p1).getAttribute("src");
    document.querySelector(p1).src = document.querySelector(p2).getAttribute("src")
    document.querySelector(p2).src = tmp
}

