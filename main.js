//* diğer dosyalardan alınan veriler
import { renderMenuItems, renderButtons } from "./scripts/ui.js";

const buttonsArea = document.getElementById("buttons");

//* datayı global scope da tanımla
let data;

//* menü verilerini json dosyasından çeken fonksiyon

async function fetchMenu() {
  //* api'den verileri al
  const res = await fetch("./db.json");

  //* json verisini js'e çevir
  data = await res.json();
}

//* sayfa yüklenme olayını izle
window.addEventListener("DOMContentLoaded", () => {
  //ekrana butonları bas
  renderButtons("Hepsi");
  //*verileri çeken fonksiyonu çalıştır
  fetchMenu()
    //*fonksiyon başarılı olursa ekrana kartları basan fonksiyonu çalıştır
    .then(() => renderMenuItems(data.menu));
});

//*butonlara tıklanma olayını izle
buttonsArea.addEventListener("click", (event) => {
  //sadece butonlara tıklanınca çalışır
  if (event.target.id !== "buttons");

  //active olan butonu belirlemek için butonları ekrana tekrar bas
  renderButtons(event.target.innerText);

  //filtrelenecek katagori ismini belirle
  const selectedCategory = event.target.dataset.id;

  if (selectedCategory === "all") {
    //? hepsine tıklandığında
    //bütün menü elemanlarını filtrelemeden ekrana bas
    renderMenuItems(data.menu);
  } else {
    //?hepsine tıklanmadığında
    // ürünleirn arasından kategori ismi bizim seçtiğimiz katagori ismine eşit olanları al
    const filtred = data.menu.filter(
      (item) => item.category === selectedCategory
    );
    //filrelenen verileri ekrana bas
    renderMenuItems(filtred);
  }
});
