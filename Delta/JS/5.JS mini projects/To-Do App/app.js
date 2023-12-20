let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    console.log("btn clicked");
    let item = document.createElement("li");
    item.innerText = inp.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.classList.add("delete");

    if(inp.value != "") {
        item.appendChild(deleteBtn);
        ul.appendChild(item);
    }
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    console.log("Event target : ", event.target);
    console.log("Event Target NodeName : ", event.target.nodeName);
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        console.log("delete : ", listItem);
        listItem.remove();
        console.log("deleted : ", listItem);
    }
})

/*
let delBtns = document.querySelectorAll(".delete");
for (delBtn of delBtns) {
    delBtn.addEventListener("click", function() {
        console.log("btn remoed");
        let parElement = this.parentElement;
        console.log(parElement);
        parElement.remove();
    });
}

*/