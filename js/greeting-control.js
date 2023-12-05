"use strict";

import {getRandomGreeting} from "./greeting-logic.js";

document.querySelector("button").addEventListener("click", nameSubmit);
function nameSubmit(ev) {
    ev.preventDefault();
    let form = document.querySelector("form");
    let name = form.querySelector("input").value;
    form.reset();
    document.querySelector("#response").innerText = `${getRandomGreeting(name)} ${name}`;
}
