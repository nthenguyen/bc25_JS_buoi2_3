//b1
//Dau vao: Tao bien soNgay
//Cho nguoi dung nhap soNgay
//Xu ly:
//Tao bien kq = soNgay * 100000
//Dau ra: Hien thi kq
document.getElementById("btnLuong").onclick = function () {
  var soNgay = document.getElementById("soNgay").value * 1;
  var kq = soNgay * 100000;
  var ketQua = "<div class='alert alert-success'>";
  ketQua += "<p>Lương nhân viên: " + kq + "</p>";
  ketQua += "</div>";
  document.getElementById("thongBao1").innerHTML = ketQua;
};

//b2
//Dau vao: Tao bien a,b,c,d,e
//Cho nguoi dung nhap a,b,c,d,e
//Xu ly:
//Tao bien kq = (a + b + c + d + e) / 5
//Dau ra: Hien thi kq
document.getElementById("btnTb").onclick = function () {
  var a = document.getElementById("mot").value * 1;
  var b = document.getElementById("hai").value * 1;
  var c = document.getElementById("ba").value * 1;
  var d = document.getElementById("bon").value * 1;
  var e = document.getElementById("nam").value * 1;
  var kq = (a + b + c + d + e) / 5;
  var ketQua = "<div class='alert alert-success'>";
  ketQua += "<p>Giá trị trung bình: " + kq + "</p>";
  ketQua += "</div>";
  document.getElementById("thongBao2").innerHTML = ketQua;
};

//b3
//Dau vao: Tao bien n;
//cho nguoi dung nhap n
//Xu ly:
//Tao bien kq = n * 23500
//Dau ra: hien thi kq
document.getElementById("btnDoi").onclick = function () {
  var n = document.getElementById("usd").value * 1;
  var kq = n * 23500;
  var ketQua = "<div class='alert alert-success'>";
  ketQua += "<p>Thành tiền VND: " + kq + "đ" + "</p>";
  ketQua += "</div>";
  document.getElementById("thongBao3").innerHTML = ketQua;
};

//b4
//Dau vao: Tao bien cd, cr
//nhap cd, cr
//Xu ly:
//Tinh dien tich
//cd * cr
//Chu vi
//(cd + cr) * 2
//Dau ra: hien thi dt, cv
document.getElementById("btnDT").onclick = function () {
  var cd = document.getElementById("cd").value * 1;
  var cr = document.getElementById("cr").value * 1;
  var dt = cd * cr;
  var ketQua = "<div class='alert alert-success'>";
  ketQua += "<p>Diện tích hcn: " + dt + "</p>";
  ketQua += "</div>";
  document.getElementById("thongBao4").innerHTML = ketQua;
};
document.getElementById("btnCV").onclick = function () {
  var cd = document.getElementById("cd").value * 1;
  var cr = document.getElementById("cr").value * 1;
  var cv = (cd + cr) * 2;
  var ketQua = "<div class='alert alert-success'>";
  ketQua += "<p>Chu vi hcn: " + cv + "</p>";
  ketQua += "</div>";
  document.getElementById("thongBao4").innerHTML = ketQua;
};

//b5
//Tao bien n
//nhap so n
//Xu ly:
//Math.floor
//hang chuc: n / 10
//hang dv: n % 10
//Tao bien kq = chuc + dv
//Dau ra: hien thi kq
document.getElementById("btnTong").onclick = function () {
  var n = document.getElementById("num").value * 1;
  var chuc = Math.floor(n / 10);
  var dv = n % 10;
  var kq = chuc + dv;
  var ketQua = "<div class='alert alert-success'>";
  ketQua += "<p>Tổng 2 ký số: " + kq + "</p>";
  ketQua += "</div>";
  document.getElementById("thongBao5").innerHTML = ketQua;
};
