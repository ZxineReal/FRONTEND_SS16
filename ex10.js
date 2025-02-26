let firstNumber = prompt("Mời bạn nhập vào số thứ nhất: ");
let secondNumber = prompt("Mời bạn nhập vào số thứ hai: ");
let randomNumber = Math.floor(Math.random() * +secondNumber) + +firstNumber;

console.log(` Số ngẫu nhiên trong khoảng số đó là: ${randomNumber}`);
