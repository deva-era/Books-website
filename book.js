var addoverlay = document.querySelector(".add-overlay")
var addpop = document.querySelector(".add-pop")
var addbutton = document.getElementById("add-button")
// book add 
addbutton.addEventListener("click", function () {
    addoverlay.style.display = "block"
    addpop.style.display = "block"
})
//save button
var savebutton = document.getElementById("save-button")
var holecontainer = document.querySelector(".holecontainer")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var descriptioninput = document.getElementById("description-input")

savebutton.addEventListener("click", function (event) {
    event.preventDefault();
    // save data
    var div = document.createElement("div")
    div.setAttribute("class", "datacontainer")
    div.innerHTML = `<h2>${booktitleinput.value}</h2> 
    <h5>${bookauthorinput.value}</h5>
    <p>${descriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    holecontainer.append(div)
    addoverlay.style.display = "none"
    addpop.style.display = "none"
})

//delete button
function deletebook(event) {
    event.target.parentElement.remove()
}

// cancel pop
const closebutton = document.getElementById("close-button")
closebutton.addEventListener("click", function (event) {
    event.preventDefault()
    addoverlay.style.display = "none"
    addpop.style.display = "none"
})

//book save
