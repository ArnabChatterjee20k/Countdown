let inc = document.getElementById("increament")
let dec = document.getElementById("decreament")
let res = document.getElementById("reset")

let num = document.getElementById("number")

inc.onclick = () => {
    let count = Number(num.innerText);
    ++count
    num.innerText = count
}

dec.onclick = () => {
    let count = Number(num.innerText);
    --count;
    num.innerText = count
}

res.onclick = () => {
    num.innerText = 0
}