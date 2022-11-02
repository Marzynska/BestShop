// form
const inputProductsQty = document.querySelector("#products");
const inputOrdersQty = document.querySelector("#orders");
const selectPackage = document.querySelector("#package");
const dropdown = document.querySelector(".select__dropdown");
const inputText = document.querySelector(".select__input");

const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");
// summary

const listItem = document.querySelectorAll(".list__item");
const total = document.querySelector(".summary__total");


prices = {
    products: 0.5,
    orders: 0.25,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 5
};


inputProductsQty.addEventListener("input", function (event){
    listItem[0].classList.add("open");
    total.classList.add("open");
});
inputOrdersQty.addEventListener("input", function (event){
    listItem[1].classList.add("open");
    total.classList.add("open");
});
selectPackage.addEventListener("click", function (event){
    selectPackage.classList.toggle("open");
});
dropdown.addEventListener("click", function (event) {
    inputText.innerText=event.target.dataset.value;
    listItem[2].classList.add("open");
    total.classList.add("open");
})
accounting.addEventListener("click", function (event){
    listItem[3].classList.add("open");
    total.classList.add("open");
});
terminal.addEventListener("click", function (event){
    listItem[4].classList.add("open");
    total.classList.add("open");
});