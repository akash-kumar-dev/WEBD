let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        // we are calling fetch(url) this is asynchronus call so JS will not wait for complete execution. thus res may be undefined. so for preventing this issue await keyboard is suitable for wait for complete execution of API.
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e) {
        console.log("ERROR: ", e);
    }

    console.log("bye");
}