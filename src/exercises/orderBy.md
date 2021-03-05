# utilizando order by

usuarios
.orderBy('nombre', 'asc')
.orderBy('salario', 'desc')
.get().then(getDocuments);
