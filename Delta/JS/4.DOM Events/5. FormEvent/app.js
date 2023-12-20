let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
    // alert("Form Submitted alert..");
    // event.preventDefault();
    // console.log("form submitted...");
// })

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);

    // let usrname = document.querySelector("#usrname");
    // let password = document.querySelector("#passwd");

    let usrname = this.elements[0]; //form.elements[0];
    let password = this.elements[1];    //form.elements[1];

    alert(`Hi ${usrname.value}, your password is set to ${password.value}`);

    console.dir(form);
})