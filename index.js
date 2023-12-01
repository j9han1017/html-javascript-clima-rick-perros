min=1
max=826
fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`)
.then(function (response) {return response.json();})
.then(data => {
 console.log(data.image) 
document.getElementById('imagen').src=data.image
})

function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min) + min); 
  }
  