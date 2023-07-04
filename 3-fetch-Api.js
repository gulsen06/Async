//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((veri) => ekranaBastir(veri));
//!sayfa yüklendiğinde veriler direk gelsin istersek alttakı gibi yazabiliriz
const veriGetir = () => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (res.ok == false) {
        throw new Error("url de hata var");
      }
      return res.json();
    })
    .then((veri) => ekranaBastir(veri));
};
document.querySelector("button").onclick = () => {
  veriGetir();
};

const ekranaBastir = (data) => {
  data.forEach((user) => {
    document.querySelector(
      "section"
    ).innerHTML += `<h1 class="mt-4">Name:<span class="text-danger">${user.login}</span></h1>
        
     <img src=${user.avatar_url} width="50%"/>
     <h3>  </h3>
    
        
        `;
  });
};
