// form
const inputProducts = document.querySelector("#products");
const inputOrders = document.querySelector("#orders");
const selectPackage = document.querySelector("#package");
const dropdown = document.querySelector(".select__dropdown");
const inputText = document.querySelector(".select__input");
const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");
// summary
const listItem = document.querySelectorAll(".list__item");
const total = document.querySelector(".summary__total");
const itemCalc = document.querySelectorAll(".item__calc");
const itemPrice = document.querySelectorAll(".item__price");
let totalPrice = document.querySelector(".total__price");
const prices = {
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
const calculate = function() {
    let show = document.querySelectorAll(".open");
    if (show.length > 0) {
        console.log("hurra");
        let accountingPrice;
        accounting.checked ? accountingPrice = prices.accounting : accountingPrice = 0;
        let terminalPrice;
        terminal.checked ? terminalPrice = prices.terminal : terminalPrice = 0;
        let toBePaid = inputProducts.value * prices.products + inputOrders.value * prices.orders + selectPrice + accountingPrice + terminalPrice;
        console.log(toBePaid);
        totalPrice.innerText = `$ ${toBePaid}`;
    } else totalPrice.innerText = `$ 0`;
};
inputProducts.addEventListener("input", function() {
    listItem[0].classList.add("open");
    total.classList.add("open");
    itemCalc[0].innerText = `${inputProducts.value} * $ ${prices.products}`;
    itemPrice[0].innerText = `$ ${inputProducts.value * prices.products}`;
    calculate();
});
inputOrders.addEventListener("input", function() {
    listItem[1].classList.add("open");
    total.classList.add("open");
    itemCalc[1].innerText = `${inputOrders.value} * $ ${prices.orders}`;
    itemPrice[1].innerText = `$ ${inputOrders.value * prices.orders}`;
    calculate();
});
selectPackage.addEventListener("click", function() {
    selectPackage.classList.toggle("open");
});
let selectPrice = 0;
dropdown.addEventListener("click", function(event) {
    let choice;
    choice = event.target.dataset.value;
    selectPackage.dataset.value = choice;
    inputText.innerText = choice;
    listItem[2].classList.add("open");
    total.classList.add("open");
    itemCalc[2].innerText = choice;
    if (choice === "basic") selectPrice = prices.package.basic;
    else if (choice === "professional") selectPrice = prices.package.professional;
    else selectPrice = prices.package.premium;
    itemPrice[2].innerText = `$ ${selectPrice}`;
    calculate();
});
accounting.addEventListener("click", function() {
    listItem[3].classList.toggle("open");
    total.classList.add("open");
    itemPrice[3].innerText = `$ ${prices.accounting}`;
    calculate();
});
terminal.addEventListener("click", function() {
    listItem[4].classList.toggle("open");
    total.classList.add("open");
    itemPrice[4].innerText = `$ ${prices.terminal}`;
    calculate();
});

//# sourceMappingURL=index.cea00a9b.js.map
