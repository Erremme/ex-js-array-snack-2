/*
Snack 5 (Bonus) - Raccogli i libri
Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
Testala con l’array [2, 13, 7, 21, 19] .

*/

const ids = [2, 13, 7, 21, 19];
async function getBooks(ids) {
  const promises = ids.map(id => fetch(`http://localhost:5000/books/${id}`).then(response => response.json()));
  const books = await Promise.all(promises);

  return books;
}
getBooks(ids)
  .then(books => {
    console.log(books);
    
  })
  .catch(error => {
    console.error('Error fetching books:', error);
  });



