function share(){
    alert("This Recipe Has Been Shared!")
}
document.getElementById("share-button").addEventListener("click", share);

const navigation = () => {
    document.querySelector("#frame").src = "./frames/hunan.html"
}


document.querySelector("#hunan").addEventListener("click", navigation);

document.querySelector("#thaicurry").addEventListener("click", () => {
    document.querySelector("#frame").src = "./frames/thaicurry.html"
});

document.querySelector("#pancakes").addEventListener("click", () => {
    document.querySelector("#frame").src = "./frames/pancakes.html"
});

document.querySelector("#tiramisu").addEventListener("click", () => {
    document.querySelector("#frame").src = "./frames/tiramisu.html"
});

