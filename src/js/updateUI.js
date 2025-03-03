const template = document.querySelector("template");
const cardContent = document.getElementById("list");

export function UpdateUI({ products }) {
  products.forEach((product) => {
    const { thumbnail, title, description } = product;

    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector(".card-title");
    const descri = clone.querySelector("#cardPI");
    const thumblin = clone.querySelector(".thumbline");

    h2.textContent = title;
    descri.textContent = description;
    thumblin.src = thumbnail;

    cardContent.appendChild(clone);
  });
}
