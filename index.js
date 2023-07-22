let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //working with the DOM (Document Object Model)

function increment() {
    countEl.textContent++
}

function save() {
    saveEl.textContent += countEl.textContent + " - "
    countEl.textContent = 0
}