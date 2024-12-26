let submit = document.querySelector("#submit");
let msg = document.querySelector("p");

function nameToNumber(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return sum;
}

submit.addEventListener("click", () => {
    let yname = document.querySelector("#yname");
    let pname = document.querySelector("#pname");
    let val = (nameToNumber(yname.value) + nameToNumber(pname.value)) % 100;
    msg.innerText = `${pname.value} has ${val}% chance of a good relationship with ${yname.value}`;
})