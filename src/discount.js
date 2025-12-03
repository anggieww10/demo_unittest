// Skenario: Kita akan membuat fungsi yang menghitung harga akhir setelah diskon dengan aturan sebagai berikut:
// Diskon Umum: Jika harga ≥500, dapat diskon 10%. Diskon Spesial Hari Besar: Diskon ini berlaku setelah diskon umum, yaitu, tambahan 5% untuk harga setelah dikurangi diskon umum. 
// Harga Minimum (Capping): Harga akhir, setelah semua diskon, tidak boleh, kurang dari 100. Jika hasilnya <100, maka harga akhirnya adalah 100.


function discount(harga, isHariBesar){
    let hargaAkhir = harga;

    if (harga >= 500) {
        hargaAkhir *= 0.9;
    }
    if (isHariBesar) {
        hargaAkhir *= 0.95;
    }
    if (hargaAkhir < 100) {
        hargaAkhir = 100;
    }
    return hargaAkhir;
}

module.exports = discount;

