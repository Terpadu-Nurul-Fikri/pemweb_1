// Soal 1
function hitungLingkaran() {
  var radius = document.getElementById('radius').value;
  if (radius > 0) {
    var luas = 3.14 * radius * radius;
    var keliling = 2 * 3.14 * radius;
    luas = luas.toFixed(2);
    keliling = keliling.toFixed(2);
    document.getElementById('lingkaranOutput').innerHTML = 'Luas : ' + luas + 'cm², keliling :' + keliling + 'cm²';
  } else {
    document.getElementById('lingkaranOutput').innerHTML = 'Masukan jari-jari yang valid!';
  }
}
// Soal 2
function hitungDuit() {
  var rupiah = document.getElementById('rupiah').value;
  if (rupiah > 0) {
    var kurs = 15870;
    var dollar = rupiah / kurs;
    document.getElementById('hasilDuit').innerText = 'Nilai : $ ' + dollar.toFixed(2);
  } else {
    document.getElementById('hasilDuit').innerText = 'Masukan Nilai yang Valid!';
  }
}
// Soal 4
function hitungPenjumlahan() {
  var bil1 = parseFloat(document.getElementById('bil1').value) || 0;
  var bil2 = parseFloat(document.getElementById('bil2').value) || 0;
  var jumlah = bil1 + bil2;
  document.getElementById('hasilJumlah').innerText = 'Jumlah: ' + jumlah.toFixed(2);
}
