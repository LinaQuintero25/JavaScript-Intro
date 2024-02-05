const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers:()=> data,
    getUser: (id) => {
        let identificador = Number(id);
        let user = data.filter((person) => person.id === identificador)[0]; 
        return user
    },
    createUser: (dataUser)=>{ // Crea un nuevo usuario
        let newUser = {
            id: data.length + 1,
            ...dataUser,
        }
        data.push(newUser); // agrega array en memoria
        return newUser;
    },
    updateUser: (id, newUpdater) => {
        let identificador = Number(id);
        var usuarioActualizado = data.find((usuarioActualizado) => usuarioActualizado.id === identificador);
        usuarioActualizado.first_name = newUpdater.first_name;
        usuarioActualizado.last_name = newUpdater.last_name;
        usuarioActualizado.email = newUpdater.email;
        return newUpdater;
      },
      deleteUser: (identificador) => {
        let id = Number(identificador);
        let usuarioEliminado = data.find((user)=> user.id==identificador)
        let posicion =  data.findIndex((usuario) => usuario.id === id);
        data.splice(posicion, 1);
        return usuarioEliminado
      },
}
