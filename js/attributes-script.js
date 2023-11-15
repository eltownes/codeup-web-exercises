setTimeout(changeProfilePic, 2000);
setTimeout(changeName, 4000);
setTimeout(changeText, 6000);

function changeProfilePic() {
    const e = document.getElementById("profile-pic")
    e.src = "images/coding_icon.png";
}

function changeName() {
    const e = document.getElementById("profile-name")
    e.innerText = "Janis Joplin";
}

function changeText() {
    const e = document.getElementById("profile-desc")
    // e.style.color = "magenta"; // changing it with the bg-color instead
    e.style.fontFamily = "Tahoma";
}

let maxColor = 16777216;
let loop = 5;
let count = 0;

const interval = setInterval(changeBgColor, 2000);

function changeBgColor() {
    count++;
    console.log(count);
    if (count === loop) {
        clearInterval(interval);
        promptChange();
    }
    let rndColorNum = 0;
    let oppositeColor = 0;
    const e = document.querySelector("div");
    const e2 = document.getElementById("profile-desc")
    if (e.className === "bg-color"){
        rndColorNum  = Math.floor(Math.random() * maxColor); //.toString(16);
        oppositeColor = rndColorNum < (maxColor*.5) ? rndColorNum+(maxColor*.5) : rndColorNum-(maxColor*.5);
        e.style.backgroundColor  = "#" + rndColorNum.toString(16);
        e2.style.color = "#" + oppositeColor.toString(16);
    }
}

function promptChange () {
    const newText = prompt("Enter new text");
    const e = document.getElementById("profile-name")
    e.innerText = newText;
}