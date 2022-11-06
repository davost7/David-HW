/*const button = ["show Form", "hide form"]

const btn = document.getElementById("button");
btn.addEventListener("click", function(){

});*/

const btn = document.getElementById("button");

button.addEventListener('click', toggleForm);
  const form = document.getElementById("buy-car-form");





function toggleForm(){
    var x = document.getElementById("buy-car-form");
    if (x.style.display == "block" || x.style.display == "") {
      x.style.display = "none";
      button.innerText = "show form";
    } else {
      x.style.display = "block";
      button.innerText = "hide form";
    }

};




/*var br = document.createElement("br");
function GFG_Fun() {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
};

ShowHideFormButton.array.forEach(createHTML);*/












/*const buyCarForm = [
    {category:["", ""],
    make:"",
    model:"",
    price:"",
    year:0,
    color:"",
    }]









const mainDiv = document.querySelector("main");
buyCarForm.forEach(createHTML);

function createHTML(buyCar, i) {
    
        const section = document.createElement("section");
        section.id = "buycar-" + i;
        section.className = "each-car";
        const btn = document.createElement("button",);
        btn.innerText = "Show form";
        btn.title = "Click to Show";
        btn.addEventListener("click", function () {
            deleteProduct(section)
        })
        const carMake = document.createElement("input");
      carMake.innerText = buyCar.make;
      const carModel = document.createElement("input");
      carModel.innerText = buyCar.model;
      const carPrice = document.createElement("input");
      carPrice.innerText = buyCar.price;
      const carYear = document.createElement("input");
      carYear.innerText = buyCar.year;
      const carColor = document.createElement("input");
      carColor.innerText = buyCar.color;
      section.append(btn, carMake, carModel, carPrice, carYear, carColor);
      buyCar.DOM = section;
      mainDiv.appendChild(section);
     
      carMake.setAttribute("placeholder", "Enter car make")
      carModel.setAttribute("placeholder", "Enter car model")
      carPrice.setAttribute("placeholder", "Enter car price")
      carYear.setAttribute("placeholder", "Enter car year")
      carColor.setAttribute("placeholder", "Enter car color")
};

function deleteProduct (x)  {
    x.remove();
  };*/