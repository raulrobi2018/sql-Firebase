# Obtiene los datos de la tabla usuarios

const usuarios = db.collection('usuarios');

# Crea la tabla si no existe y agrega el registro

# Devulve una promesa con toda la información del registro insertado

db.collection('usuarios').add(usuario)
.then(docRef => {
console.log(docRef)
})
.catch(e => console.log('error', e))

# Actualiza un registro a partir de su id

usuarios.doc('3zoAb8nEt5bxBd0dc8OO').update({
activo: false
});

# Actualiza un registro a partir de su id pero destruye todos los

# demás atributos

usuarios.doc('3zoAb8nEt5bxBd0dc8OO').set({
activo: true,
casado: true,
edad: 40
});

# Elimina un registro

usuarios.doc('3zoAb8nEt5bxBd0dc8OO')
.delete()
.then(resp => console.log('User deleted'))
.catch(err => console.log('Error', err))

# Obtener todos los registros

# El onSnapshot es un callback que se ejecuta cada vez que la

# información en la base de datos cambia

usuarios.onSnapshot(snap => {
getDocuments(snap);
});

# Esta forma también obtiene los objetos pero no está pendiente de los cambios en la base de datos

usuarios.get().then(snap => {
getDocuments(snap);
});

# Utilizando clausula "where"

usuarios.where('activo', '==', true).get().then(snap => {
getDocuments(snap);
});

usuarios.where('salario', '>', 1500).get().then(snap => {
console.log(getDocuments(snap));
});

usuarios
.where('salario', '>=', 1500)
.where("salario", "<=", 2600).get().then(snap => {
console.log(getDocuments(snap));
});

# Cuando se utiliza más de 1 campo se debe crear un índice para esos campos en Firebase

# La consola de error del navegador dará error si no existe y mostrará una URL que permitirá crearla

usuarios
.where('salario', '>=', 1500)
.where("activo", "==", true).get().then(snap => {
console.log(getDocuments(snap));
});
