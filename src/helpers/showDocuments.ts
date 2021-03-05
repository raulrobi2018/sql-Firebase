import firebase from 'firebase';

export const getDocuments = (snapshot: firebase.firestore.QuerySnapshot) => {
    const documents: any[] = [];

    // Extrae el id y la data y lo agrega como un nuevo objeto dentro del array creado
    snapshot.forEach(s => {
        documents.push({
            id: s.id,
            // Agrega el resto de los atributos
            ...s.data()
        })
    });

    console.log(documents);
    return documents;
}
