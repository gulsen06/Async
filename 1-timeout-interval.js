//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

/* --------------------- Asenkron programlama setTimeOut (1 sferlik)-------------------- */
setTimeout(() => {
  console.log("Selam Dünya");
}, 2000);
console.log("dünya");
setTimeout(() => {
  console.log("hallo word");
}, 3000);
//! önce dünya kodu calisir sonra ,selam dünya  en son hallo word

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking
console.log("sayac basliyor");
let sayac = 0;
const interval1 = setInterval(() => {
  console.log(sayac++);
  if (sayac === 5) {
    clearInterval(interval1);
  }
}, 1000);
