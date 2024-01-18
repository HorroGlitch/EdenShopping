import './style.css'
let response = await fetch("http://dummyjson.com/products");
let responseAsJson = await response.json();
let products = responseAsJson.products;

const app = document.querySelector("#app");
const produit = app;

for (let i = 0; i < products.length; i++) {
  
  console.log(products)

  let h2 =  document.createElement("h2");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let articleContain = document.createElement("article");


  app.appendChild(articleContain);
  articleContain.appendChild(h2);
  articleContain.appendChild(img);
  articleContain.appendChild(p);

  h2.textContent = products[i].title
  img.setAttribute('src', products[i].images[0]);
  p.textContent = products[i].price + "$"

}

let h2 =  document.createElement("h2");
let img = document.createElement("img");
let p = document.createElement("p");
let articleContain = document.createElement("article");

let currencies = "€"

app.appendChild(articleContain);
articleContain.appendChild(h2);
articleContain.appendChild(img);
articleContain.appendChild(p);

h2.textContent = "toto"
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/CH.ZG.Zug_View_from_Guggi_01_16x9%2BR_8192x4608_Br058_gp_denoising_Br075.jpg/500px-CH.ZG.Zug_View_from_Guggi_01_16x9%2BR_8192x4608_Br058_gp_denoising_Br075.jpg');
p.textContent = "400$"
