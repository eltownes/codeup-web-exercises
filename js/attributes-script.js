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
    e.style.color = "magenta";
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
    const e = document.querySelector("div");
    if (e.className === "bg-color"){
        rndColor = "#" + Math.floor(Math.random() * maxColor).toString(16);
        e.style.backgroundColor = rndColor;
    }
}

function promptChange () {
    const newText = prompt("Enter new text");
    const e = document.getElementById("profile-name")
    e.innerText = newText;
}