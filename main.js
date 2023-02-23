const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

const pokemon = document.getElementById('nombrePokemon')
const buttonSearch = document.getElementById('buscarPokemon')
const buttonDelete = document.getElementById('eliminarPokemon')
const appNode = document.getElementById('app')

buttonSearch.addEventListener('click', insertarPokemon)
buttonDelete.addEventListener('click', eliminarPokemon)


function insertarPokemon(){
    window.fetch(`${baseURL}${pokemon.value.toLowerCase()}`)                     //* tLCpara convertir las letras en mayus
    .then(response => {                                                          //*llamada a API
        if (response.status == 404){
            alert('Este pokemon no está disponible. Intenta con otro')

        } else{
            return response.json()
        }
    })
    .then(responseJSON => {
        const allItems = []

        const result = []

        for (let pokemonInfo in responseJSON){                       
            result.push([pokemonInfo, responseJSON [pokemonInfo]])               //* Push: añade valores al array
        }

        console.table(result)                                                    //*array result donde aparece toda la info

        //*crear imagen

        const pokemonImage = document.createElement('img')
        pokemonImage.src = result [14][1].front_default                         //* trae img desde indices de array en la consola


        //*nombre e ID
        const pokemonName = document.createElement ('h2')
        pokemonName.innerText = `Nombre: ${result [10][1]} - ID: ${result[6][1]}` 

        //*tipo de pokemon

        const pokemonType = document.createElement ('h2')
        pokemonType.innerText = `Type: ${result [16][1][0].type.name}`

        //*contenedor

        const container = document.createElement ('div')
        container.append (pokemonImage, pokemonName, pokemonType)              //*metodo append para adjuntar objetos

        allItems.push(container)                                      

        appNode.append(...allItems)

    }) 
}

function eliminarPokemon(){
    let allPokemon = appNode.childNodes
    allPokemon = Array.from(allPokemon)

    allPokemon.forEach ( pokemon => {
        pokemon.remove (pokemon)
    })
}