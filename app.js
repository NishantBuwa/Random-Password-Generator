const length_final = document.querySelector("#length-input")
const uppercase = document.querySelector("#uppercase-input")
const lowercase = document.querySelector("#lowercase-input")
const number = document.querySelector("#number-input")
const symbols = document.querySelector("#symbols-input")
let your_pass=document.querySelector("#your_pass")

const gen_pass = document.querySelector("button")

const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset = upperset.toLowerCase()
const numberset = "0123456789"
const symbolset = "~!@#$%^&*(){}/"

const generate_random = (set) => {
    l = set.length
    return set[Math.floor(Math.random() * l)]
}

let password = ""
const generate_password = (password = "") => {

    if (number.checked) {
        password += generate_random(numberset)
    }
    if (uppercase.checked) {
        password += generate_random(upperset)
    }
    if (lowercase.checked) {
        password += generate_random(lowerset)
    }
    if (symbols.checked) {
        password += generate_random(symbolset)
    }
    if (password.length < length_final.value) {
        generate_password(password)
    } else {
        password=password.slice(0,length_final.value)
        your_pass.innerHTML="Your Password : "+password
    }
}

gen_pass.addEventListener("click", () => {
    generate_password()
})
