window.onload=function(){
  const pokemon = document.getElementById('nombrePokemon')
const buttonSearch = document.getElementById('buscarPokemon')
const buttonDelete = document.getElementById('eliminarPokemon')
const appNode = document.getElementById('app')
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    
    let pokemonInfo = params.id; 
    alert (pokemonInfo);
  }