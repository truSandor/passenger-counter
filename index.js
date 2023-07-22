let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //working with the DOM (Document Object Model)
let count = 0

function increment() {
    count++
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    }