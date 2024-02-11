import { buttonData } from "./constants.js";

const buttonsArea = document.getElementById("buttons");

// menu list divini çağırma
const menuList = document.getElementById("menu-list");

// arayüz- değişikli yapan bütün fonksiyonları bu dosya da tutacağız
//ekranda güncelleme yapan bütün fonksiyonlar burada olacak.

export const renderMenuItems = (data) => {
  // data dizisinde ki her bir obje için bir tane kart html oluştur
  // 1-forEach 2-map -----temel fark  map de yeni dizi oluşturuken foreach sdece bir görev yapar
  //oluşturulan kartları #menulist divinin içine aktar
  //join methodu diziyi metine çevirmemizi sağlar
  menuList.innerHTML = data
    .map(
      (item) => `
  <a
  id="card"
  href="/detail.html?id=${item.id}"
  class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
>
  <img class="rounded shadow img-fluid" 
  src="${item.img}" />

  <div>
    <div class="d-flex justify-content-between">
      <h5>${item.title}</h5>
      <p class="text-success fw-bold">${(item.price * 30).toFixed(2)}</p>
    </div>
    <p class="lead">
    ${item.desc}
    </p>
  </div>
</a>`
    )
    .join(" ");
};

// dizide ki herbir eleman için ekrana buton basan fonskiyon
export const renderButtons = (activeText) => {
  //eskiden oluşturulan butonları kaldır
  buttonsArea.innerHTML = " ";
  //butonların herbiri için aşağıdaki adımları izle
  buttonData.forEach((btn) => {
    //1-buton elementi oluştur
    const buttonEle = document.createElement("button");

    //2-class belirle
    buttonEle.className = "btn btn-outline-dark";

    //3-data-id değerini tanımla
    buttonEle.setAttribute("data-id", btn.value); //2.ci değeri 1.ci değerin içine tanımla

    //4-içindeki yazıyı belirle
    buttonEle.innerText = btn.text;

    //eğer ki butonun yazısı aktif yazı ile eşleşirse siyah yap
    if (btn.text === activeText) {
      buttonEle.classList.add("btn-dark", "text-white");
    }

    //5-butonu dom (html) gönder
    buttonsArea.appendChild(buttonEle);
  });
};
