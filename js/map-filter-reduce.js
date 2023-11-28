"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


function step2 (arrOfObj){
    return arrOfObj.filter(obj => obj.languages.length >= 3);
}
// console.log(step2(users));

function step3 (arrOfObj){
    return arrOfObj.map(obj => obj.email);
}
// console.log(step3(users));

function step4 (arr){
    return arr.reduce((acc, cur) => acc + cur, 0);
}
function step4_2 (arrOfObj){
    const sumYears = arrOfObj.reduce((acc, obj) => {
        return acc + obj.yearsOfExperience;
    }, 0);
    return sumYears / arrOfObj.length;
}
// console.log(step4([1,2,3,4]));
// console.log(step4_2(users));

function step5 (arrOfObj){
    return arrOfObj.reduce((email, obj) => {
        return email.length < obj.email.length ? obj.email : email;
    }, "");
}
console.log(step5(users));

function step6 (arrOfObj){
    let i = 1;
    return arrOfObj.reduce((names, obj) => {
        // special char: , or .
        i++;
        let specChar = i <= arrOfObj.length ? "," : ".";
        return names + " " + obj.name + `${specChar}`;
    }, "Your instructors are:");
}
// console.log(step6(users));


function bonus (arrOfObj){
    return arrOfObj.reduce((uniqLang, obj) => {
        for (let lang of obj.languages) {
            if (!uniqLang.includes(lang)) {
                uniqLang.push(lang);
            }
        }
        return uniqLang;
    }, []);
}
console.log(bonus(users));
