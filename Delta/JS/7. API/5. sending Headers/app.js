let url = "https://icanhazdadjoke.com/";

async function getJoke() {
    try {
    let config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}