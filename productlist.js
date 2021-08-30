const url = "https://kea-alt-del.dk/t7/api/products";

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
  const template = document.querySelector("#smallProductTemplate").textContent;
  //clone it
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(".subtle")
    .textContent`${product.articletype} | ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classlist.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classlist.add("onSale");

    copy.querySelector(".discounted p").textContent =
      product.price / product.discount;
  }
  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
