let inputBar = document.querySelector("#addBar")
let addBtn = document.querySelector("#addBtn")
let listContainer = document.querySelector(".listContainer")
let li = document.querySelector("li")

addBtn.addEventListener("click", () => {
    if (inputBar.value === "") {
        alert("add some Task")
    }
    else {
        let LI = document.createElement("li")
        circle = document.createElement("span")
        circle.innerHTML = `<i class="fa-regular fa-circle"></i>`
        circle.classList.add("circle")
        LI.classList.add("LI-styling")
        LI.innerHTML = inputBar.value
        LI.prepend(circle)
        // LI.innerText = inputBar.value
        listContainer.appendChild(LI)

        inputBar.value = ""
        LI.addEventListener("click", () => {
            // LI.classList.prepend(cross)
            LI.classList.add("LI")
            let deletBtn = document.createElement("span")
            deletBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
            deletBtn.classList.add("deletBtn")
            LI.append(deletBtn)
            LI.removeChild(circle)
            deletBtn.addEventListener("click", () => {
                listContainer.removeChild(LI)
            })

        })
    }
})