var ul = document.getElementById('rants')
var input = document.getElementById('rant')
function ntask() {
    var li = document.createElement("li")
    li.innerHTML = input.value + "<button onclick='sala(event)'> delete </button>"
    ul.append(li)
}

function sala(event) {
    event.target.parentElement.remove()
}
