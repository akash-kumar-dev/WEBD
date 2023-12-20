let url = "https://catfact.ninja/fact";


// v1
// fetch(url)
//     .then((res) => {
//         console.log(res);
//         // res is promise here
//         // console.log(res.json());
//         // res.json() also returns a promise
//         res.json().then((data) => {
//             console.log(data);
//         })
//     })
//     .catch((err) => {
//         console.log("ERROR: ",err);
//     });



// v2
// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR: ",err);
//     });




// v3
// multiple call to API by chaning
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("fact1: ", data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("fact2: ", data2.fact);
    })
    .catch((err) => {
        console.log("ERROR: ",err);
    });

    console.log("API calling is Asynchronus Process.");