const axios = require("axios");

// axios vs fetch


// fetch


// function main() {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(async (response) => {
//         const json = await response.json();
//         console.log(json);
//     })
// }

// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const json = await response.json();
//     console.log(json);
// }

// axios
// in axios we don't need to convert the response to json, axios directly returns the json

// async function main() {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//     // const json = await response.json();
//     console.log(response.data);
// }


// post request
// in axios we dont think about reposne will be text or json or anything else
async function main() {
    const response = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": "John",
            "age": 30,
        })
    })

    const textualData = await response.text();
    console.log(textualData);
}

// async function main() {
//     const response = await axios.post(""), {
//         "name": "John",
//         "age": 30,
//     }, {
//         headers: {
//             Authorization: "Bearer token",
//         }
//     };
//     console.log(response.data);
// }

// Request config

async function main() {
    const response = await axios(
        {
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/todos/1",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "John",
                "age": 30,
            }
        }
    )
}

// in get request we cant pass body

main();