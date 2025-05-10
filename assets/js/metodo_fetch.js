let urlApi = 'https://spapi.dev/api/characters'
const tableBody = document.getElementById('TableResponseApi')

const getAllItemsApi = async (url) => {

    //! llamada a la api metodo fetch, usando tryCatch para manejo de errores
    try {
        const response = await fetch(url)
        //? respuesta de la api
        const data = await response.json()
        console.log(data);

        for (let index of data.data) {
            const apiResults = await fetch(index.url).then(res => res.json())

            printElementsApi(apiResults)
        }

    } catch (error) {
        console.log("Encontré este error " + error);

    }
}

const printElementsApi = (characters) => {
    const tableApi = `
        <tr>
            <td>${characters.data.id}</td>
            <td>${characters.data.name}</td>
            <td>${characters.data.age}</td>
            <td>${characters.data.religion}</td>
            <td>${characters.data.occupation}</td>
        </tr>
    `
    tableBody.innerHTML += tableApi
}
// Llamada a la función principal para mostrar la API
getAllItemsApi(urlApi)