const matches = document.getElementsByClassName("unrevealed");

for (let i = 0; i < matches.length; i++) {
    matches[i].addEventListener("click",
        (event) => {
            event.preventDefault()
            matches[i].classList.add("revealed")
        })
    console.log(matches[i].href)
}
