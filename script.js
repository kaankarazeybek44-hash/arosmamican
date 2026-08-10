// Tek bir arkadaş için özel bilgiler
const arkadas = {
    ad: "Aroş mami", 
    unvan: "Goat of the gourmets", 
    foto: "aroş.png" // Klasöre attığın fotoğrafın tam adı
};

// Sayfadaki HTML yapısını tek bir kart olarak dolduruyoruz
const container = document.getElementById("galleryContainer");

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
    <img src="${arkadas.foto}" alt="${arkadas.ad}">
    <div class="card-content">
        <div class="name">${arkadas.ad}</div>
        <div class="title-text">${arkadas.unvan}</div>
    </div>
`;

container.appendChild(card);