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

document.querySelector("#garlic").addEventListener("click", () => {
    document.querySelector("#frame").src = "./frames/garlic.html"
});

document.querySelector("#chickpeas").addEventListener("click", () => {
    document.querySelector("#frame").src = "./frames/chickpeas.html"
});

// document.querySelector("#tiramisu").addEventListener("click", () => {
//     document.querySelector("#frame").src = "./frames/tiramisu.html"
// });

document.querySelector("#chickpeas").addEventListener("click", () => {
    document.querySelector('.dropdown-toggle').innerText="Pressure Cooker Chickpeas"
});

document.querySelector("#garlic").addEventListener("click", () => {
    document.querySelector('.dropdown-toggle').innerText="Ginger Garlic Paste"
});

document.querySelector("#pancakes").addEventListener("click", () => {
    document.querySelector('.dropdown-toggle').innerText="Pancakes"
});

document.querySelector("#tiramisu").addEventListener("click", () => {
    document.querySelector('.dropdown-toggle').innerText="Tiramisu"
});

document.querySelector("#thaicurry").addEventListener("click", () => {
    document.querySelector('.dropdown-toggle').innerText="Thai Green Curry"
});

document.querySelector("#hunan").addEventListener("click", () => {
    document.querySelector('.dropdown-toggle').innerText="Hunan Sauce"
});