
 var URL;
 var request;

function loadProducts(textoBuscar){
    let catalogo = document.getElementsByClassName('row');

    // ******************************** JSON ***********************************************
    URL = 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json';
    request = ( myURL ) => {
    fetch( myURL )
        .then(response => response.json() ) /* Convierte el response a JSON */
        .then(productsJson => {
        
        for (let elemento of productsJson) {
            let {name, price, src, type } = elemento;
            catalogo[3].innerHTML +=  `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
            <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                </a>
              </div>
              <div class="card-body p-3">
                <p class="mb-0 text-sm">${type}</p>
                <a href="javascript:;">
                  <h5>
                    ${name}
                  </h5>
                </a>
                <p class="mb-4 text-sm">
                  <b>Price: </b> $ ${price}
                </p>
              </div>
            </div>
          </div>`
        }    
        })
        .catch(error => {
        console.log( error );  
        });     
    }
    request(URL);
    
    // ************************************ XML *******************************************

    URL = 'https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml';

    request = ( myURL ) => {
    fetch( myURL )
      .then(response => response.text() ) /* Convierte el response a texto */
      .then(productXml => {

      let xml = (new DOMParser()).parseFromString(productXml, 'application/xml');
      let productos = xml.getElementsByTagName('product');
            
      //console.log(cat[0].children[0].innerHTML);

       for (let elemento of productos) {
         let nombre = elemento.children[0].innerHTML;
         let precio = elemento.children[1].innerHTML;
         let ruta = elemento.children[2].innerHTML;
         let tipo = elemento.children[3].innerHTML;

         catalogo[3].innerHTML += `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
         <div class="card card-blog card-plain">
           <div class="card-header p-0 mt-n4 mx-3">
             <a class="d-block shadow-xl border-radius-xl">
               <img src="${ruta}" alt="${nombre}" class="img-fluid shadow border-radius-xl">
             </a>
           </div>
           <div class="card-body p-3">
             <p class="mb-0 text-sm">${tipo}</p>
             <a href="javascript:;">
               <h5>
                 ${nombre}
               </h5>
             </a>
             <p class="mb-4 text-sm">
               <b>Price: </b> $ ${precio}
             </p>
           </div>
         </div>
       </div>`         
       }      
      })
      .catch(error => {
       console.log( error );

      }); 
  }
  request(URL);
};


document.addEventListener("DOMContentLoaded", () => {
    loadProducts('');
 });

 let btnFiltro = document.getElementById('filter');
 let textoBusqueda = document.getElementById('text');

 btnFiltro.addEventListener('click', () => {
        console.log('1');
});

