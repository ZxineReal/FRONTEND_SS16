let math = prompt("Mời banh nhập vào điểm toán: ");
let physics = prompt("Mời bạn nhập vào điểm Vật Lí");
let chemistry = prompt("Mời bạn nhập vào điểm Hóa:");
let avg = ( +math + +physics + +chemistry) / 3;

console.log(` Điểm trung bình 3 môn học là: ${avg}`);
document.write(` Điểm trung bình 3 môn học là: ${avg}`);