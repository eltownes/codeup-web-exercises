
const butn1 = document.querySelector(".button");
butn1.addEventListener('click', (ev) => {
    const factsUl = document.querySelectorAll(".facts")
    factsUl.forEach(ul =>{
        ul.lastElementChild.style.backgroundColor = "yellow";
    })
})

const h3Listener = document.querySelectorAll("h3")
for (h3 of h3Listener) {
    h3.addEventListener('click', function (ev) {
        const items = this.nextElementSibling.children
        for (i of items){
            i.style.fontWeight = "bold"
        }
    })
}

const liListener = document.querySelectorAll("li")
for (li of liListener) {
    li.addEventListener("click", function (ev) {
        this.parentElement.firstElementChild.style.color = "red"
    })
}
