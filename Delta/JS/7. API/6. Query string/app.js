let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let collageArr = await getColleges(country);
    show(collageArr);
});

function show(collageArr) {
    let addEventListener = document.querySelector("#list");
    list.innerText = "";
    for(college of collageArr) {
        console.log(college.name);

        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch(err) {
        console.log("ERROR: ", err);
        return [];
    }
}