const produtcts = [
    {category:["lux"],
    make:"land rover",
    model:"range rover",
    price:"£50,000",
    image:"Range.jpg",
    yeare:2022,
    available: true,
    },
    {category:["sport"],
        make:"bmw",
        model:"x7",
        price:"£70,000",
        image:"x7.jpg",
        yeare:"2023",
        available:"",
    },
    {category:[""],
        make:
        model:"",
        price:"",
        image:"",
        yeare:""
    },
    {category:[""],
        make:"",
        model:"",
        price:"",
        image:"",
        yeare:"",
        },
            
        
]
const mainDiv = document.querySelector("main")
var toAppend = "";

produtcts.forEach(creatHTML);
function creatHTML() {
    if (car.available){
        toAppend += `<div>
        <h1>${produtcts.make}</h1>
        <h2>${produtcts.model}</h2>
        <p>${produtcts.price}</p>
         </Div>`;
        }
}

/*for(let i = 0; i <produtcts.length; i++) {
    const car = produtcts[i];
    if (car.available){
    toAppend += `<div>
    <h1>${produtcts.make}</h1>
    <h2>${produtcts.model}</h2>
    <p>${produtcts.price}</p>
     </Div>`;
    }
};
mainDiv.innerHTML = toAppend;