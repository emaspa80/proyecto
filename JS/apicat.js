const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_mT7oaEsmJi7AUwGgyR4of5f2Dgdxykt7uajzlEykH3JuUKw9OjQrDHDJCforZZ9x"
let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   //filtro para incluir solo aquellos con un objeto de `imagen`
   data = data.filter(img=> img.image?.url!=null)
   
  storedBreeds = data;
   
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     //omite cualquier raza que no tenga una imagen
     if(!breed.image)continue
     
    //usar el índice de matriz actual
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);
    
    }
   //mostrar la primera raza por defecto
   showBreedImage(0)
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
 
  
  
  
}