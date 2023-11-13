var btnTinh = document.getElementById('btnTinh');
btnTinh.onclick = function() {
    var txbTenPhim=document.getElementById('txbTenPhim').value;
    var GiaNgLon = document.getElementById('txbGiaNgLon').value*1;
    var GiaTrEm = document.getElementById('txbGiaTrEm').value*1;
    var SLNgLon= document.getElementById('txbSlNgLon').value*1;
    var SLTrEm= document.getElementById('txbSlTrEm').value*1;
    var tyLe=document.getElementById('txbTyLe').value*1;
    var totalVe=SLNgLon + SLTrEm;
    var DoanhThu=(GiaNgLon*SLNgLon) + (GiaTrEm*SLTrEm);
    var PhanTramTienTuThien=DoanhThu*(tyLe/100);
    var TongThuSauKhiTru=DoanhThu-PhanTramTienTuThien;


    var result="";
    result +="<div class='alert alert-success'><p>Tên phim:.................................................."+txbTenPhim+"</p>";
    result +="<p>Số vé đã bán:.................................................."+totalVe+"</p>";
    result +="<p>Doanh thu:.................................................."+DoanhThu+"</p>";
    result +="<p>Trích % từ thiện:.................................................."+tyLe+"%</p>";
    result +="<p>Tổng số tiền trích từ thiện:...................................."+PhanTramTienTuThien+"</p>";
    result +="<p>Tổng thu được sau khi trừ:......................................."+TongThuSauKhiTru+"</p> </div>";

    var footerTong=document.getElementById("footerTong");
    footerTong.innerHTML=result;


};