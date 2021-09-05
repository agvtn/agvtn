//From category site to productlist site

const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");
const url = "https://kea-alt-del.dk/t7/api/products?season=" + season;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductlist(data);
  });

function handleProductlist(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //soldOut onSale
  //grab template
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  //clone it
  const copy = template.cloneNode(true);

  //change content
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);

  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector(".price span ").textContent = product.price;
  copy.querySelector(".discount span ").textContent = product.discount;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");

    copy.querySelector(".discounted p").textContent =
      "Now DKK " +
      Math.round(product.price - (product.price * product.discount) / 100);
  }

  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
