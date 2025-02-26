let myStr = prompt("Mời bạn nhập vào một đoạn string: ");
let newStr = myStr.charAt(0).toUpperCase()+ myStr.slice(1).toLowerCase();

document.write(newStr);
console.log(newStr);
