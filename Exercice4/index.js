let myButton = document.getElementById("myButton")
myButton.addEventListener("click", function () {
    const message = document.createElement('p')
    message.textContent = "Bonjour, vous avez cliqué sur le bouton !"
    document.body.appendChild(message)
});