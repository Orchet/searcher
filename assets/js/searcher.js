
 var URL;
 var request;

function loadProducts(){

    URL = 'https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json';
    request = ( myURL ) => {
  
    fetch( myURL )
        .then(response => response.json() ) /* Convierte el response a JSON */
        .then(productsJson => {
        
        console.log(productsJson);
        
        
        })
        .catch(error => {
        console.log( error );  
        });     
    }
    request(URL);
    
    // ********************************************************************************************


    
  


};


loadProducts();