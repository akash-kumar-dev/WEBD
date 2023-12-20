let url = "https://dog.ceo/api/breeds/image/random";

async function dogPicture() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (error) {
        return "/";
    }
}

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let picture_url = await dogPicture();
    console.log(picture_url);

    let show_img = document.querySelector("#dog-picture");
    show_img.src = picture_url;
})