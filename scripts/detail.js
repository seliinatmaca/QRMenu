/*
url deki arama parametresine (search-param) erişme
js de tarayıcı ile alaklaı verilere erişmek istiyorsak windows nesnesini kullanırız
içerisinde ki location değeri url detaylarını verir


js de url deki arama parametrelerini yönetmye yarayan yerleşik bir class var.
? urlsearcjparams
*/
const params = new URLSearchParams(window.location.search);

/*
yukarıda ki classdan örnek almamız sayesinde parametreler erişmeye ve güncellmeye yarayan methodları kullanabileceğimiz
bir nesne oluştu bizde bu nesnenin içerisind eki get methodu ile parametreler arasından isteğimizi çağırdık.
*/

const paramId = params.get("id");

//sayfanın yüklenmesini izle
document.addEventListener("DOMContentLoaded", async () => {
  // 1-apiden verileri al
  const res = await fetch("../db.json");
  const data = await res.json();
  //   console.log(paramId, data.menu);

  //2-veriler arasından urldeki id ye denk gelen veriyi al
  const product = data.menu.find((item) => item.id == paramId);

  //3-sayfa içeriğini elimizdeki veriye göre değişir
  renderPage(product);
});

const outlet = document.getElementById("outlet");

function renderPage(product) {
  outlet.innerHTML = ` <div class="d-flex justify-content-between fs-5"> 
    <a href="/">
    <img width= "40px" src="images/home.png">
</a>
<p>anasayfa /${product.category} / ${product.title.toLowerCase()} </p></div>



<h1 class="text-center my-3">${product.title}</h1>

<img src="${product.img}" class="rounded object-fit-cover shadow" alt="oreo">

<h3 class="mt-4">
    <span>Ürünün Kategorisi:</span>
    <span class="text-success">${product.category}</span>

</h3>

<h3 class="mt-4">
    <span>Ürünün Fiyatı:</span>
    <span class="text-success">${(product.price * 30).toFixed(2)} ₺</span>

</h3>
<p class=${product.desc}>oreo sevenler için muhteşem bir lezzet</p> `;
}
