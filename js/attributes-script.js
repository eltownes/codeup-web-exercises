
setTimeout(changeProfilePic, 2000);
setTimeout(changeName, 4000);
setTimeout(changeText, 6000);

function changeProfilePic(){
    const e = document.getElementById("profile-pic")
    e.src = "images/coding_icon.png";
}

function changeName(){
    const e = document.getElementById("profile-name")
    e.innerText = "Janis Joplin";
}

function changeText(){
    const e = document.getElementById("profile-desc")
    e.style.color = "magenta";
    e.style.fontFamily = "Tahoma";
}
