
import db from './firebase/config';
import { getDocuments } from './helpers/showDocuments';

const usuario = {
    nombre: "Ana María",
    activo: true,
    fechaNac: 0,
    salario: 7200
}

const usuarios = db.collection('usuarios');

usuarios.limit(1).get().then(getDocuments);

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);

const btnPrev = document.createElement('button');
btnPrev.innerText = 'Previous Page';
document.body.append(btnPrev);

let lastDocument: any = null;
let firstDocument: any = null;

btnNext.addEventListener('click', () => {
    const query = usuarios.orderBy('nombre')
        // Si el lastDocument es null lo ignora
        .startAfter(lastDocument);

    // Va obteniendo de a 2 y seteando el último documento de esos dos
    query.limit(2).get().then(snap => {
        // Si no hay más seteamos null y se reinicia la página
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        firstDocument = snap.docs[0] || null;
        getDocuments(snap);
    })
});

btnPrev.addEventListener('click', () => {
    const query = usuarios.orderBy('nombre')
        // Si el lastDocument es null lo ignora
        .endBefore(firstDocument);

    // Va obteniendo de a 2 y seteando el último documento de esos dos
    query.limit(2).get().then(snap => {
        // Si no hay más seteamos null y se reinicia la página
        lastDocument = snap.docs[snap.docs.length - 1] || null;
        firstDocument = snap.docs[0] || null;
        getDocuments(snap);
    })
});