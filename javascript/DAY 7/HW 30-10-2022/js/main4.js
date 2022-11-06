const products = [
    {category:["Coat"],
    make:"Ted Baker",
    model:"Long",
    price:"£2,000",
    image:"Range.jpg",
    yeare:2022,
    available: true,
    },
    {category:["sport"],
        make:"Gap",
        model:"x7",
        price:"£500",
        image:"x7.jpg",
        yeare:"2023",
        available: true,
    },
    {category:["shoe"],
        make:"Nike",
        model:"mash",
        price:"£120",
        image:"nm120.jpg",
        yeare:"2019",
        available: true,
    },
    {category:["Footwear"],
        make:"Condor",
        model:"#black",
        price:"£15.99",
        image:"conbl.jpg",
        yeare:"2015",
        available: true,
    },    
    {category:["hat"],
        make:"kruse",
        model:"chasidic",
        price:"£310.00",
        image:"chasih.jpg",
        yeare:"2011",
        available: true,
    },    
];

const mainDiv = document.querySelector("main");
products.forEach(createHTML);

function createHTML(product, i) {
    if (product.available) {
      const div = document.createElement("div");
      div.id = "product-" + i;
      div.className = "each-product";
      div.style.backgroundImage = `url(./assets/${product.image})`;
      const btn = document.createElement("button");
      btn.innerText = "X";
      btn.title = "Click to remove";
      btn.addEventListener("click", function(){
        deleteProduct(div)
      })
      const h1 = document.createElement("h1");
      h1.innerText = product.make;
      const h2 = document.createElement("h2");
      h2.innerText = product.model;
      const p = document.createElement("p");
      p.innerText = product.price;
      div.append(btn, h1, h2, p);
      product.DOM = div;
      mainDiv.appendChild(div);
    }
  };

  function deleteProduct (x)  {
    x.remove();
  };
  