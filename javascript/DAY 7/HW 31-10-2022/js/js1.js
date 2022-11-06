const Cars = [
];

    const mainDiv = document.querySelector("main"); //
    const showHide = document.getElementById("show-hide");
    const FormDOM = {
        theForm: document.getElementById("the-form"),
        category: document.getElementById("input-category"),
        make: document.getElementById("allmakes"),
        model: document.getElementById("allmodels"),
        year: document.getElementById("input-year"),
        price: document.getElementById("input-price"),
        submit: document.getElementById("add-car")
    };

    showHide.addEventListener("click", toggleForm);
    /*function toggleForm() {
        if (FormDOM.theForm.style.display == "block") {
          FormDOM.theForm.style.display = "none";
          this.innerHTML = "Show Form";
        } else {
          FormDOM.theForm.style.display = "block";
          this.innerHTML = "Hide Form";
        }
      }*/

function toggleForm(){ //i built this function
    var form = document.getElementById("the-form");
    if (form.style.display == "block" || form.style.display == "") {
      form.style.display = "none";
      showHide.innerText = "Show Form";
    } else {
      form.style.display = "block";
      showHide.innerText = "Hide Form";
    }
}
FormDOM.submit.addEventListener("click", addCar);
function addCar() {
    var newCar = new Car(
    FormDOM.category.value,
    FormDOM.make.value,
    FormDOM.model.value,
    FormDOM.price.value,
    FormDOM.year.value,
    );
    Cars.push(newCar);
    createHTML(newCar, Cars.length -1)
}
class Car {
    constructor(_category, _make, _model, _price, _year) {
    this.category = [_category];
    this.make = _make;
    this.model = _model;
    this.price = _price;
    this.image = "";
    this.year = _year;
    this.available = true;
    }
    beepBeep() {
        alert("Move away, I am a " + this.make + " " + this.model);
      }
}
Cars.forEach(createHTML);

function createHTML(car, i) {
  if (car.available) {
    const div = document.createElement("div");
    div.id = "car-" + i;
    div.className = "each-car";
    /*const img = document.createElement("img");
    img.src = `./assets/images/${car.image}`;*/
    const btn = document.createElement("button");
    btn.innerText = "x";
    btn.title = "Click to remove";
    const h1 = document.createElement("h1");
    h1.innerText = car.make;
    btn.addEventListener("click", function(){
        deleteProduct(div)
      })
 var remove = Cars.splice[0,2];
      function deleteProduct (x)  {
        x.remove();
      }

    const h2 = document.createElement("h2");
    h2.innerText = car.model;
    const p = document.createElement("p");
    p.innerText = car.price;
    div.append(btn, h1, h2, p/*, img*/);
    car.DOM = div;
    mainDiv.appendChild(div);
  }

 /* var AUDI = $(".audi"),
    bmw = $('.bmw');
    $('#allmakes').change(function() {
        $('.allmodels').prop('selected', true);
    
        // .show() and .hide() working on Chrome, Firefox and Opera.
        // Added attr() and removeAttr() to work on Safari but the disabled options are still visible. Would ideally like to hide these.
        if ($(this).val() === 'AUDI') {
            AUDI.show().removeAttr('disabled');
            bmw.hide().attr('disabled', 'disabled');
        } else if ($(this).val() === 'bmw') {
            audi.hide().attr('disabled', 'disabled');
            bmw.show().removeAttr('disabled');
     
        }
    })*/

  console.log(Cars)
};