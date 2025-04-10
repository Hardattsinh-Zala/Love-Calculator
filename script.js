let submit = document.querySelector("#submit");
let inputs = document.querySelectorAll("input");
let msg = document.querySelector("p");
let myName = document.querySelector("#yname");
let partnerName = document.querySelector("#pname");

function nameToNumber(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.toLowerCase().charCodeAt(i);
    }
    return sum;
}

submit.addEventListener("click", () => {
    let val;
    if(myName.value.toLowerCase().includes("hardatt") && partnerName.value.toLowerCase().includes("shakshi")) {
        val = 100;
    }else {
        val = (nameToNumber(myName.value) + nameToNumber(partnerName.value)) % 100;
    }
    for(let input of inputs) {
        if(input.value === "") {
            return;
        }
    }
    msg.innerText = `${partnerName.value} has ${val}% chance of a good relationship with ${myName.value}`;
})