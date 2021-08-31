const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .productname").textContent =
    product.productdisplayname;

  //PRODUCT DETAILS
  document.querySelector(".price span").textContent = product.price;
  document.querySelector(".discount span").textContent = product.discount;
  document.querySelector(".brandname span").textContent = product.brandname;

  document.querySelector(".id span").textContent = product.id;
  document.querySelector(".category span").textContent = product.category;
  document.querySelector(".subcategory span").textContent = product.subcategory;
  document.querySelector(".productionyear span").textContent =
    product.productionyear;
  document.querySelector(".season span").textContent = product.season;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
}

//price and discount etc

//   const template = document.querySelector("template").content;
//   const clone = template.cloneNode(true);
//   clone.querySelector(".price").textContent = product.price;

//   const parent = document.querySelector("main");
//   parent.appendChild(clone);

// <img src="https://kea-alt-del.dk/t7/images/webp/1000/1163.webp" alt="Sahara Team India Fanwear">
