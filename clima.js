let ciudad = 'bogota'
fetch(`https://goweather.herokuapp.com/weather/${ciudad}`)
.then(response =>  response.json())
.then(data => console.log('la temperatura de ' +  ciudad + ' es '+ data.temperature+' y la velocidad del viento es '+ data.wind)
)  
