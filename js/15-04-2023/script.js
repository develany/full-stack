function dtoUser(user) {

    return { nome: user.first_name, email: user.email }
}

async function buscarTodos() {

    try {
        const response = await fetch('https://reqres.in/api/users')

        // const { data: users } = await response.json()

        const pagina = await response.json()

        console.log(pagina.data)


    } catch (error) {
        console.error(error.message)
    }

}

buscarTodos()

async function deleteById(id) {
    fetch('https://reqres.in/api/users')
}