
var overlaysa = document.querySelector(".overlay")
var popupsa = document.querySelector(".popup")
var add = document.querySelector('.add')
var cancel = document.getElementById('cancel')

add.addEventListener("click", function () {
    overlaysa.style.display = "block"
    popupsa.style.display = "block"
})

cancel.addEventListener("click", function () {
    overlaysa.style.display = "none"
    popupsa.style.display = "none"
})

function del(event) {
    event.target.parentElement.remove()
}


var container = document.querySelector('.container')
var save = document.getElementById('save-rant')
var topic = document.getElementById('topic')
var subject = document.getElementById('subject')
var here = document.getElementById('here')

save.addEventListener("click", function (event) {
    event.preventDefault()
    var div= document.createElement('div')
    div.setAttribute("class", "rant-container")
    div.innerHTML = `<h2>${topic.value}</h2>
    <h5>${subject.value}</h5>
    <p>${here.value}</p>
    <button onclick="del(event)"> DELETE</button>`

    container.append(div)

    overlaysa.style.display = "none"
    popupsa.style.display = "none"
})